<?php
/**
 * 2007-2017 PrestaShop
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to http://www.prestashop.com for more information.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2017 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShopBundle\Entity\Repository;

use Doctrine\DBAL\Driver\Connection;
use Doctrine\ORM\EntityManager;
use PDO;
use PrestaShop\PrestaShop\Adapter\ImageManager;
use PrestaShop\PrestaShop\Adapter\LegacyContext as ContextAdapter;
use PrestaShopBundle\Entity\StockMvt;
use Symfony\Component\DependencyInjection\ContainerInterface;

class StockMovementRepository extends StockManagementRepository
{
    /**
     * StockMovementRepository constructor.
     * @param ContainerInterface $container
     * @param Connection $connection
     * @param EntityManager $entityManager
     * @param ContextAdapter $contextAdapter
     * @param ImageManager $imageManager
     * @param $tablePrefix
     */
    public function __construct(
        ContainerInterface $container,
        Connection $connection,
        EntityManager $entityManager,
        ContextAdapter $contextAdapter,
        ImageManager $imageManager,
        $tablePrefix
    )
    {
        parent::__construct(
            $container,
            $connection,
            $entityManager,
            $contextAdapter,
            $imageManager,
            $tablePrefix
        );
    }

    /**
     * @param string $andWhereClause
     * @param string $having
     * @param null $orderByClause
     * @return mixed
     */
    protected function selectSql(
        $andWhereClause = '',
        $having = '',
        $orderByClause = null
    )
    {
        if (is_null($orderByClause)) {
            $orderByClause = $this->orderByMovementsIds();
        }

        return str_replace(
            array(
                '{and_where}',
                '{having}',
                '{order_by}',
                '{table_prefix}',
            ),
            array(
                $andWhereClause,
                $having,
                $orderByClause,
                $this->tablePrefix,
            ),
            'SELECT SQL_CALC_FOUND_ROWS
              sm.id_stock_mvt,
              sm.id_stock,
              sm.id_order,
              sm.id_employee,
              sm.employee_lastname,
              sm.employee_firstname,
              sm.physical_quantity,
              sm.date_add,
              sm.sign,
              smrl.id_stock_mvt_reason,
              smrl.name                                   AS movement_reason,
              p.id_product                                AS product_id,
              COALESCE(pa.id_product_attribute, 0)        AS combination_id,
              IF(
                  LENGTH(COALESCE(pa.reference, "")) = 0,
                  IF(LENGTH(TRIM(p.reference)) > 0, p.reference, "N/A"),
                  CONCAT(p.reference, " ", pa.reference)
              )                                           AS product_reference,
              pl.name                                     AS product_name,
              p.id_supplier                               AS supplier_id,
              COALESCE(s.name, "N/A")                     AS supplier_name,
              COALESCE(ic.id_image, 0)                    AS product_cover_id
           FROM {table_prefix}stock_mvt sm
            INNER JOIN {table_prefix}stock_mvt_reason_lang smrl ON (
              smrl.id_stock_mvt_reason = sm.id_stock_mvt_reason
              AND smrl.id_lang = :language_id)
            INNER JOIN {table_prefix}stock_available sa ON (sa.id_stock_available = sm.id_stock)
            LEFT JOIN {table_prefix}product p ON (p.id_product = sa.id_product)
            LEFT JOIN {table_prefix}product_attribute pa ON (pa.id_product_attribute = sa.id_product_attribute)
            LEFT JOIN {table_prefix}product_lang pl ON (
                p.id_product = pl.id_product AND
                pl.id_lang = :language_id
            )
            INNER JOIN {table_prefix}product_shop ps ON (
                p.id_product = ps.id_product AND
                ps.id_shop = :shop_id
            )
            LEFT JOIN {table_prefix}image ic ON (
                p.id_product = ic.id_product AND
                ic.cover = 1
            )
            LEFT JOIN {table_prefix}image_shop ims ON (
                p.id_product = ims.id_product AND
                ic.id_image  = ims.id_image AND
                ims.id_shop = :shop_id AND
                ims.cover = 1
            )
            LEFT JOIN {table_prefix}supplier s ON (p.id_supplier = s.id_supplier)
            LEFT JOIN {table_prefix}product_attribute_combination pac ON (
                pac.id_product_attribute = pa.id_product_attribute
            )
            LEFT JOIN {table_prefix}product_attribute_shop pas ON (
                pas.id_product = pa.id_product AND
                pas.id_product_attribute = pa.id_product_attribute AND
                pas.id_shop = :shop_id
            )
            WHERE
            sa.id_shop = :stock_shop_id AND
            sa.id_shop_group = :stock_group_id AND
            sa.id_product_attribute = COALESCE(pa.id_product_attribute, 0)
            {and_where}
            GROUP BY sm.id_stock_mvt
            HAVING 1 {having}
            {order_by}
        ');
    }

    /**
     * @return string
     */
    private function orderByMovementsIds()
    {
        return 'ORDER BY sm.id_stock_mvt DESC';
    }

    /**
     * @param array $rows
     * @return array
     */
    protected function addAdditionalData(array $rows)
    {
        $rows = $this->addCombinationsAndFeatures($rows);
        $rows = $this->addImageThumbnailPaths($rows);
        $rows = $this->addOrderLink($rows);

        return $rows;
    }

    private function addCombinationsAndFeatures(array $rows)
    {
        array_walk($rows, function (&$row) {
            $this->addProductFeatures($row);
            if ($row['combination_id'] != 0) {
                $this->addCombinationName($row);
                $this->addCombinationCoverId($row);
                $this->addProductAttributes($row);
            } else {
                $row['combination_name'] = 'N/A';
                $row['combination_cover_id'] = 0;
                $row['product_attributes'] = '';
            }
        });

        return $rows;
    }

    /**
     * @param array $rows
     * @return array
     */
    private function addOrderLink(array $rows)
    {
        array_walk($rows, function (&$row) {
            if ($row['id_order']) {
                $row['order_link'] = $this->contextAdapter->getContext()->link->getAdminLink('AdminOrders', true, array(), array('vieworder' => true, 'id_order' => (int)$row['id_order']));
            } else {
                $row['order_link'] = 'N/A';
            }
        });

        return $rows;
    }

    /**
     * Get movements from employees
     * @return mixed
     */
    public function getEmployees()
    {
        $query = str_replace('{table_prefix}', $this->tablePrefix,
            'SELECT DISTINCT sm.id_employee, CONCAT(sm.employee_lastname, \' \', sm.employee_firstname) AS name
            FROM {table_prefix}stock_mvt sm
            INNER JOIN {table_prefix}stock_available sa ON (sa.id_stock_available = sm.id_stock)
            WHERE
            sa.id_shop = :shop_id
            ORDER BY name ASC'
        );

        $statement = $this->connection->prepare($query);
        $statement->bindValue('shop_id', $this->shopId, PDO::PARAM_INT);
        $statement->execute();

        $rows = $statement->fetchAll();
        $statement->closeCursor();
        $employees = $this->castNumericToInt($rows);

        return $employees;
    }

    /**
     * Get type of movements from employees
     *
     * @param bool $grouped
     * @return mixed
     */
    public function getTypes($grouped = false)
    {
        if ($grouped) {
            $select = 'GROUP_CONCAT(DISTINCT sm.id_stock_mvt_reason) as id_stock_mvt_reason, smrl.name AS name';
            $groupBy = 'GROUP BY name';
        } else {
            $select = 'sm.id_stock_mvt_reason, smrl.name AS name';
            $groupBy = 'GROUP BY id_stock_mvt_reason';
        }

        $query = str_replace('{table_prefix}', $this->tablePrefix,
            'SELECT '.$select.'
            FROM {table_prefix}stock_mvt sm
            INNER JOIN {table_prefix}stock_available sa ON (sa.id_stock_available = sm.id_stock)
            INNER JOIN {table_prefix}stock_mvt_reason_lang smrl ON (
              smrl.id_stock_mvt_reason = sm.id_stock_mvt_reason
              AND smrl.id_lang = :language_id)
            WHERE
            sa.id_shop = :shop_id
            '.$groupBy.'
            ORDER BY name ASC'
        );

        $statement = $this->connection->prepare($query);
        $statement->bindValue('language_id', $this->languageId, PDO::PARAM_INT);
        $statement->bindValue('shop_id', $this->shopId, PDO::PARAM_INT);
        $statement->execute();

        $rows = $statement->fetchAll();
        $statement->closeCursor();

        if ($grouped) {
            $types = $this->castIdsToArray($rows);
        } else {
            $types = $this->castNumericToInt($rows);
        }

        return $types;
    }

    /**
     * @param StockMvt $stockMvt
     * @return int
     */
    public function saveStockMvt(StockMvt $stockMvt)
    {
        $this->em->persist($stockMvt);
        $this->em->flush();

        return $stockMvt->getIdStockMvt();
    }
}
