module.exports = {
  AddProductPage: {
    exit_welcome_button: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
    click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
    logout: '#header_logout',
    products_subtab: '#subtab-AdminCatalog',
    go_to_catalog_button: '#form > div.product-footer > div.text-lg-right > div > div.dropdown-menu > a.dropdown-item.go-catalog.js-btn-save',
    more_option_button: '.btn.btn-primary.dropdown-toggle',
    new_product_button: '#page-header-desc-configuration-add',
    product_name_input: '#form_step1_name_1',
    save_product_button: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
    green_validation_notice: '[class="growl growl-notice growl-medium"]',
    close_validation_button: '.growl-close',
    validation_msg: '//*[@id="growls"]/div/div[3]',
    red_validation_notice: '[class="growl growl-error growl-medium"]',
    description_tab: '[href="#description"]',
    quantity_shortcut_input: '#form_step1_qty_0_shortcut',
    picture: '[class="dz-hidden-input"]',
    picture_cover: '.iscover',
    product_online_toggle: '.switch-input ',
    catalogue_filter_by_name_input: '//input[@name="filter_column_name"]',
    catalogue_submit_filter_button: '//button[@name="products_filter_submit"]',
    variations_type_button: '//*[@id="show_variations_selector"]/div[2]/label/input',
    variations_tab: '//*[@id="tab_step3"]/a',
    variations_input: '//*[@id="form_step3_attributes-tokenfield"]',
    variations_generate: '//*[@id="create-combinations"]',
    variations_select: '//*[@id="attributes-generator"]/div[2]/div[1]/fieldset/div/span/div/div/div',
    var_selected: '//*[@id="toggle-all-combinations"]',
    var_selected_quantitie: '//*[@id="product_combination_bulk_quantity"]',
    combinations_thead: '//*[@id="combinations_thead"]/tr/th[7]',
    save_quantitie_button: '//*[@id="apply-on-combinations"]',
    add_feature_to_product_button: '//*[@id="add_feature_button"]',
    feature_select: '//*[@id="features-content"]/div/div/div[1]/fieldset/span/span[1]/span',
    select_feature_created: '/html/body/span[4]/span/span[1]/input',
    feature_select_button: '//*[@id="features-content"]/div/div/div[1]/fieldset/span/span[1]/span',
    result_feature_select: '//*[@id="select2-form_step1_features_%ID_feature-results"]/li',
    add_summary_textarea_button: '//*[@id="form_step1_description_short"]/div/div/div/div/div[1]/div/div/div/div/div/div[1]/button',
    add_summary_textarea: '/html/body/div[7]/div[2]/div[2]/div/textarea',
    save_summary_button: '/html/body/div[7]/div[3]/div/div[2]/button',
    tab_description: '//*[@id="tab_description"]/a',
    feature_value_select: '//*[@id="form_step1_features_0_value"]',
    product_create_category_btn: '//*[@id="add-category-button"]',
    product_type: '#form_step1_type_product',
    product_category_name_input: '//*[@id="form_step1_new_category_name"]',
    category_create_btn: '//*[@id="form_step1_new_category_save"]',
    category_home: '//*[@id="form_step1_categories"]/ul/li/div/label/input',
    product_add_brand_btn: '//*[@id="add_brand_button"]',
    product_brand_select: '//*[@id="manufacturer-content"]/div/div[1]/fieldset/span',
    product_brand_select_option: '//*[@id="select2-form_step1_id_manufacturer-results"]/li[2]',
    search_product_pack: '//*[@id="form_step1_inputPackItems"]',
    product_item_pack: '//*[@id="js_form_step1_inputPackItems"]/div/div[1]/span/div/div/div[1]/table/tbody/tr[1]',
    product_pack_item_quantity: '//*[@id="form_step1_inputPackItems-curPackItemQty"]',
    product_pack_add_button: '//*[@id="form_step1_inputPackItems-curPackItemAdd"]',
    add_related_product_btn: '//*[@id="add-related-product-button"]',
    search_add_related_product_input: '//*[@id="form_step1_related_products"]',
    related_product_item: '//*[@id="related-content"]/div[2]/fieldset/div/div[1]/span/div/div/div[1]',
    product_add_feature_btn: '//*[@id="add_feature_button"]',
    feature_select_option_height: '//*[@id="select2-form_step1_features_0_feature-results"]/li[2]',
    feature_custom_value_height: '//*[@id="form_step1_features_0_custom_value_1"]',
    priceTE_shortcut: '#form_step1_price_shortcut',
    product_reference: '//*[@id="form_step6_reference"]',
    product_quantities_tab: '//*[@id="tab_step3"]/a',
    product_quantity_input: '//*[@id="form_step3_qty_0"]',
    minimum_quantity_sale: '//*[@id="form_step3_minimal_quantity"]',
    pack_stock_type: '//*[@id="form_step3_pack_stock_type"]',
    virtual_associated_file: '#form_step3_virtual_product_is_virtual_file_0',
    virtual_select_file: '#form_step3_virtual_product_file',
    virtual_file_name: '#form_step3_virtual_product_name',
    virtual_file_number_download: '#form_step3_virtual_product_nb_downloadable',
    virtual_expiration_file_date: '#form_step3_virtual_product_expiration_date',
    virtual_number_days: '#form_step3_virtual_product_nb_days',
    virtual_save_attached_file: '#form_step3_virtual_product_save',
    pack_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
    pack_label_in_stock: '//*[@id="form_step3_available_now_1"]',
    pack_label_out_stock: '//*[@id="form_step3_available_later_1"]',
    pack_availability_date: '//*[@id="form_step3_available_date"]',
    pack_unit_price: '//*[@id="form_step2_unit_price"]',
    product_shipping_tab: '//*[@id="tab_step4"]/a',
    shipping_width: '//*[@id="form_step4_width"]',
    shipping_height: '//*[@id="form_step4_height"]',
    shipping_depth: '//*[@id="form_step4_depth"]',
    shipping_weight: '//*[@id="form_step4_weight"]',
    shipping_fees: '//*[@id="form_step4_additional_shipping_cost"]',
    shipping_available_carriers: '//*[@id="form_step4_selectedCarriers_1"]',
    product_combinations_tab: '//*[@id="tab_step3"]/a',
    product_combinations: '//*[@id="show_variations_selector"]/div[2]/label/input',
    combination_size_s: '//*[@id="attribute-group-1"]/div/div[1]/label',
    combination_size_m: '//*[@id="attribute-group-1"]/div/div[2]/label',
    combination_color_gray: '//*[@id="attribute-group-3"]/div/div[1]/label',
    combination_color_beige: '//*[@id="attribute-group-3"]/div/div[3]/label',
    combination_generate_button: '//*[@id="create-combinations"]',
    combination_availability_preferences: '//*[@id="form_step3_out_of_stock_0"]',
    combination_label_in_stock: '//*[@id="form_step3_available_now_1"]',
    combination_label_out_stock: '//*[@id="form_step3_available_later_1"]',
    combination_panel: '//*[@id="accordion_combinations"]/tr[%NUMBER]',
    combination_quantity: '//*[@id="combination_%NUMBER_attribute_quantity"]',
    combination_available_date: '//*[@id="combination_%NUMBER_available_date_attribute"]',
    combination_min_quantity: '//*[@id="combination_%NUMBER_attribute_minimal_quantity"]',
    combination_reference: '//*[@id="combination_%NUMBER_attribute_reference"]',
    combination_whole_sale: '//*[@id="combination_%NUMBER_attribute_wholesale_price"]',
    combination_low_stock: '//*[@id="combination_%NUMBER_attribute_low_stock_threshold"]',
    combination_priceTI: '//*[@id="combination_%NUMBER_attribute_priceTI"]',
    combination_attribute_unity: '//*[@id="combination_%NUMBER_attribute_unity"]',
    combination_attribute_weight: '//*[@id="combination_%NUMBER_attribute_weight"]',
    combination_attribute_isbn: '//*[@id="combination_%NUMBER_attribute_isbn"]',
    combination_attribute_ean13: '//*[@id="combination_%NUMBER_attribute_ean13"]',
    combination_attribute_upc: '//*[@id="combination_%NUMBER_attribute_upc"]',
    combination_attribute_image: '//*[@id="attribute_%NUMBER"]/td[2]/img',
    combination_attribute_quantity: '//*[@id="attribute_%NUMBER"]/td[6]/div/input',
    combination_image: '//*[@id="combination_%NUMBER_id_image_attr"]/div[2]/img',
    combination_edit: '//*[@id="attribute_%NUMBER"]/td[7]/div[1]/a',
    back_to_product: '//*[@id="combination_form_%NUMBER"]/div[2]/div[1]/button',
    product_pricing_tab: '//*[@id="tab_step2"]/a',
    unit_price: '#form_step2_unit_price',
    unity: '#form_step2_unity',
    pricing_tax_rule_select: '//*[@id="step2"]/div/div/div/div/div[3]/div/div[1]/span',
    pricing_wholesale: '//*[@id="form_step2_wholesale_price"]',
    pricing_first_priorities_select: '//*[@id="form_step2_specificPricePriority_0"]',
    pricing_second_priorities_select: '//*[@id="form_step2_specificPricePriority_1"]',
    pricing_third_priorities_select: '//*[@id="form_step2_specificPricePriority_2"]',
    pricing_fourth_priorities_select: '//*[@id="form_step2_specificPricePriority_3"]',
    product_SEO_tab: '//*[@id="tab_step5"]/a',
    SEO_meta_title: '//*[@id="form_step5_meta_title_1"]',
    SEO_meta_description: '//*[@id="form_step5_meta_description_1"]',
    SEO_friendly_url: '//*[@id="form_step5_link_rewrite_1"]',
    product_options_tab: '//*[@id="tab_step6"]/a',
    options_visibility: '//*[@id="form_step6_visibility"]',
    options_online_only: '//*[@id="form_step6_display_options_online_only"]',
    options_condition_select: '//*[@id="form_step6_condition"]',
    options_isbn: '//*[@id="form_step6_isbn"]',
    options_ean13: '//*[@id="form_step6_ean13"]',
    options_upc: '//*[@id="form_step6_upc"]',
    options_add_customization_field_button: '//*[@id="custom_fields"]/a',
    options_first_custom_field_label: '//*[@id="form_step6_custom_fields_0_label_1"]',
    options_first_custom_field_type: '//*[@id="form_step6_custom_fields_0_type"]',
    options_first_custom_field_require: '//*[@id="form_step6_custom_fields_0_require"]',
    options_second_custom_field_label: '//*[@id="form_step6_custom_fields_1_label_1"]',
    options_second_custom_field_type: '//*[@id="form_step6_custom_fields_1_type"]',
    options_add_new_file_button: '//*[@id="step6"]/div/div/div/div/div/div[11]/div/a',
    options_select_file: '//*[@id="form_step6_attachment_product_file"]',
    options_file_name: '//*[@id="form_step6_attachment_product_name"]',
    options_file_description: '//*[@id="form_step6_attachment_product_description"]',
    options_file_add_button: '//*[@id="form_step6_attachment_product_add"]',
    options_file_checkbox: '//*[@id="form_step6_attachments_0"]',
    catalog_product_name: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[3]/a',
    catalog_product_reference: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[4]',
    catalog_product_category: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[5]',
    catalog_product_price: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[6]',
    catalog_product_quantity: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[7]',
    catalog_product_online: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[8]/a/i',
    catalog_reset_filter: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[2]/th[9]/button[2]',
    catalog_home: '//*[@id="form_step1_categories"]/ul/li/div/label',
    catalog_first_element_radio: '//*[@id="form_step1_categories"]/ul/li/ul/li[1]/div',
    catalog_second_element_radio: '//*[@id="form_step1_categories"]/ul/li/ul/li[1]/ul/li[1]/div',
    catalog_third_element_radio: '//*[@id="form_step1_categories"]/ul/li/ul/li[1]/ul/li[2]/div',
    category_radio_button: '//*[@id="form_step1_categories"]//input[@name="ignore" and @value="%VALUE"]'
  }
};
