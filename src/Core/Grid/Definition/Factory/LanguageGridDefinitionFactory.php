<?php
/**
 * 2007-2018 PrestaShop
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
 * @copyright 2007-2018 PrestaShop SA
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

namespace PrestaShop\PrestaShop\Core\Grid\Definition\Factory;

use PrestaShop\PrestaShop\Core\Grid\Action\Bulk\BulkActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Bulk\Type\SubmitBulkAction;
use PrestaShop\PrestaShop\Core\Grid\Action\GridActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\RowActionCollection;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\Type\LinkRowAction;
use PrestaShop\PrestaShop\Core\Grid\Action\Row\Type\SubmitRowAction;
use PrestaShop\PrestaShop\Core\Grid\Action\Type\SimpleGridAction;
use PrestaShop\PrestaShop\Core\Grid\Column\ColumnCollection;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\ActionColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\Common\BulkActionColumn;
use PrestaShop\PrestaShop\Core\Grid\Column\Type\DataColumn;
use PrestaShop\PrestaShop\Core\Grid\Filter\Filter;
use PrestaShop\PrestaShop\Core\Grid\Filter\FilterCollection;
use PrestaShopBundle\Form\Admin\Type\SearchAndResetType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * Class LanguageGridDefinitionFactory creates definition for languages grid.
 */
final class LanguageGridDefinitionFactory extends AbstractGridDefinitionFactory
{
    /**
     * {@inheritdoc}
     */
    protected function getId()
    {
        return 'language';
    }

    /**
     * {@inheritdoc}
     */
    protected function getName()
    {
        return $this->trans('Languages', [], 'Admin.Global');
    }

    /**
     * {@inheritdoc}
     */
    protected function getColumns()
    {
        return (new ColumnCollection())
            ->add((new BulkActionColumn('language_bulk'))
                ->setOptions([
                    'bulk_field' => 'id_lang',
                ])
            )
            ->add((new DataColumn('name'))
                ->setName($this->trans('Name', [], 'Admin.Global'))
                ->setOptions([
                    'field' => 'name',
                ])
            )
            ->add((new DataColumn('iso_code'))
                ->setName($this->trans('ISO code', [], 'Admin.International.Feature'))
                ->setOptions([
                    'field' => 'iso_code'
                ])
            )
            ->add((new DataColumn('language_code'))
                ->setName($this->trans('Language code', [], 'Admin.International.Feature'))
                ->setOptions([
                    'field' => 'language_code',
                ])
            )
            ->add((new DataColumn('date_format_lite'))
                ->setName($this->trans('Date format', [], 'Admin.International.Feature'))
                ->setOptions([
                    'field' => 'date_format_lite',
                ])
            )
            ->add((new DataColumn('date_format_full'))
                ->setName($this->trans('Date format (full)', [], 'Admin.International.Feature'))
                ->setOptions([
                    'field' => 'iso_code',
                ])
            )
            ->add((new DataColumn('active'))
                ->setName($this->trans('Date format (full)', [], 'Admin.International.Feature'))
                ->setOptions([
                    'field' => 'active',
                ])
            )
            ->add((new ActionColumn('actions'))
                ->setName($this->trans('Actions', [], 'Admin.Global'))
                ->setOptions([
                    'actions' => (new RowActionCollection())
                        ->add((new LinkRowAction('edit'))
                            ->setIcon('edit')
                            ->setOptions([
                                'route' => 'admin_languages_index',
                                'route_param_name' => 'languageId',
                                'route_param_field' => 'id_lang',
                            ])
                        )
                        ->add((new SubmitRowAction('delete'))
                            ->setName($this->trans('Delete', [], 'Admin.Actions'))
                            ->setIcon('delete')
                            ->setOptions([
                                'confirm_message' => $this->trans(
                                    'Delete selected item?',
                                    [],
                                    'Admin.Notifications.Warning'
                                ),
                                'route' => 'admin_languages_index',
                                'route_param_name' => 'languageId',
                                'route_param_field' => 'id_lang',
                            ])
                        ),
                ])
            )
        ;
    }

    /**
     * {@inheritdoc}
     */
    protected function getFilters()
    {
         return (new FilterCollection())
             ->add((new Filter('id_lang', NumberType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                        'placeholder' => $this->translator->trans('Search ID', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('id_lang')
             )
             ->add((new Filter('name', TextType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                         'placeholder' => $this->translator->trans('Search name', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('name')
             )
             ->add((new Filter('iso_code', TextType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                         'placeholder' => $this->translator->trans('Search iso code', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('iso_code')
             )
             ->add((new Filter('language_code', TextType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                         'placeholder' => $this->translator->trans('Search code', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('language_code')
             )
             ->add((new Filter('date_format_lite', TextType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                         'placeholder' => $this->translator->trans('Search date format', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('date_format_lite')
             )
             ->add((new Filter('date_format_full', TextType::class))
                 ->setTypeOptions([
                     'required' => false,
                     'attr' => [
                         'placeholder' => $this->translator->trans('Search date format', [], 'Admin.International.Help'),
                     ],
                 ])
                 ->setAssociatedColumn('date_format_full')
             )
             ->add((new Filter('active', ChoiceType::class))
                 ->setTypeOptions([
                     'choices' => [
                         $this->trans('Yes', [], 'Admin.Global') => 1,
                         $this->trans('No', [], 'Admin.Global') => 0,
                     ],
                     'required' => false,
                     'choice_translation_domain' => false,
                 ])
                 ->setAssociatedColumn('active')
             )
             ->add((new Filter('actions', SearchAndResetType::class))
                 ->setTypeOptions([
                     'attr' => [
                         'data-url' => '',
                         'data-redirect' => '',
                     ],
                 ])
                 ->setAssociatedColumn('actions')
             )
         ;
    }

    /**
     * {@inheritdoc}
     */
    protected function getGridActions()
    {
        return (new GridActionCollection())
            ->add((new SimpleGridAction('common_refresh_list'))
                ->setName($this->trans('Refresh list', [], 'Admin.Advparameters.Feature'))
                ->setIcon('refresh')
            )
            ->add((new SimpleGridAction('common_show_query'))
                ->setName($this->trans('Show SQL query', [], 'Admin.Actions'))
                ->setIcon('code')
            )
            ->add((new SimpleGridAction('common_export_sql_manager'))
                ->setName($this->trans('Export to SQL Manager', [], 'Admin.Actions'))
                ->setIcon('storage')
            )
        ;
    }
    /**
     * {@inheritdoc}
     */
    protected function getBulkActions()
    {
        return (new BulkActionCollection())
            ->add((new SubmitBulkAction('enable_selection'))
                ->setName($this->trans('Enable selection', [], 'Admin.Actions'))
                ->setOptions([
                    'submit_route' => 'admin_languages_index',
                ])
            )
            ->add((new SubmitBulkAction('disable_selection'))
                ->setName($this->trans('Disable selection', [], 'Admin.Actions'))
                ->setOptions([
                    'submit_route' => 'admin_languages_index',
                ])
            )
            ->add((new SubmitBulkAction('delete_selection'))
                ->setName($this->trans('Delete selected', [], 'Admin.Actions'))
                ->setOptions([
                    'submit_route' => 'admin_languages_index',
                ])
            )
        ;
    }
}
