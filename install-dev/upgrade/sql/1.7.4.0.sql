SET SESSION sql_mode = '';
SET NAMES 'utf8';

ALTER TABLE `PREFIX_currency` ADD `numeric_iso_code` VARCHAR(3) NOT NULL DEFAULT '0' AFTER `iso_code`;
ALTER TABLE `PREFIX_currency` ADD `precision` INT(2) NOT NULL DEFAULT 2 AFTER `numeric_iso_code`;

/* Localized currency information */
CREATE TABLE `PREFIX_currency_lang` (
  `id_currency` int(10) unsigned NOT NULL,
  `id_lang` int(10) unsigned NOT NULL,
  `name` varchar(64) NOT NULL,
  `symbol` VARCHAR(32) NOT NULL
  PRIMARY KEY (`id_currency`,`id_lang`)
) ENGINE=ENGINE_TYPE DEFAULT CHARSET=utf8 COLLATION;

/* PHP:ps_1740_copy_data_from_currency_to_currency_lang(); */;

ALTER TABLE `PREFIX_currency` DROP `name`;
