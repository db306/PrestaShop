var CommonClient = require('./../common_client');
const {AddProductPage} = require('../../selectors/BO/add_product_page');
const {ProductList} = require('../../selectors/BO/product_list');
var data = require('./../../datas/product-data');
var path = require('path');

global.productIdElement = [];

class Product extends CommonClient {

  getElementID() {
    return this.client
      .waitForExist(ProductList.first_product_id, 90000)
      .then(() => this.client.getText(ProductList.first_product_id))
      .then((text) => global.productIdElement[0] = text)
      .then(() => this.client.getText(ProductList.second_product_id))
      .then((text) => global.productIdElement[1] = text)
      .then(() => this.client.getText(ProductList.third_product_id))
      .then((text) => global.productIdElement[2] = text)
      .then((text) => expect(Number(global.productIdElement[0])).to.be.above(Number(global.productIdElement[1])))
      .then((text) => expect(Number(global.productIdElement[1])).to.be.above(Number(global.productIdElement[2])));
  }

  checkCategoryRadioButton(i, j) {
    return this.client
      .waitForVisible('//*[@id="form_step1_categories"]/ul/li[2]/ul/li[1]/ul/li['+i+']/ul/li['+j+']/div/label/input[2]')
      .scroll(0, 1000)
      .isVisible('//*[@id="form_step1_categories"]/ul/li[2]/ul/li[1]/ul/li['+i+']/ul/li['+j+']/div/label/input[2]', 60000)
      .then((text) => expect(text).to.be.true);
  }

  openAllCategory() {
    return this.client
      .scrollTo(AddProductPage.catalog_home, 50)
      .waitForExistAndClick(AddProductPage.catalog_home)
      .waitForExistAndClick(AddProductPage.catalog_first_element_radio)
      .waitForExistAndClick(AddProductPage.catalog_second_element_radio)
      .scrollTo(AddProductPage.catalog_third_element_radio, 50)
      .waitForExistAndClick(AddProductPage.catalog_third_element_radio)
  }

  associatedFile() {
    return this.client
      .waitForExistAndClick(AddProductPage.virtual_associated_file)
      .pause(2000)
  }

  availability() {
    return this.client
      .scrollTo(AddProductPage.pack_label_out_stock, 50)
      .waitAndSetValue(AddProductPage.pack_label_out_stock, data.common.qty_msg_unstock)
  }

  selectPricingPriorities() {
    return this.client
      .scrollTo(AddProductPage.pricing_first_priorities_select, 50)
      .waitAndSelectByValue(AddProductPage.pricing_first_priorities_select, 'id_shop')
      .waitAndSelectByValue(AddProductPage.pricing_second_priorities_select, 'id_currency')
      .waitAndSelectByValue(AddProductPage.pricing_third_priorities_select, 'id_country')
      .waitAndSelectByValue(AddProductPage.pricing_fourth_priorities_select, 'id_group')
  }

  selectCondition() {
    return this.client
      .scrollTo(AddProductPage.options_condition_select, 50)
      .waitAndSelectByValue(AddProductPage.options_condition_select, 'refurbished')
  }

  UPCEntry() {
    return this.client
      .scrollTo(AddProductPage.options_upc, 50)
      .waitAndSetValue(AddProductPage.options_upc, data.common.upc)
  }

  addPackProduct(search,quantity) {
    return this.client
      .waitAndSetValue(AddProductPage.search_product_pack, search)
      .waitForExistAndClick(AddProductPage.product_item_pack)
      .waitAndSetValue(AddProductPage.product_pack_item_quantity, quantity)
      .waitForExistAndClick(AddProductPage.product_pack_add_button)
  }

  createCategory() {
    return this.client
      .scrollTo(AddProductPage.category_create_btn, 50)
      .waitForExistAndClick(AddProductPage.category_create_btn)
      .pause(4000)
  }

  removeHomeCategory() {
    return this.client
      .waitForVisible(AddProductPage.product_create_category_btn, 90000)
      .waitForVisibleAndClick(AddProductPage.category_home)
  }

  selectBrand() {
    return this.client
      .waitForExistAndClick(AddProductPage.product_brand_select)
      .waitForExistAndClick(AddProductPage.product_brand_select_option)
  }

  searchAndAddRelatedProduct() {
    var search_products = data.common.search_related_products.split('//');
    return this.client
      .waitAndSetValue(AddProductPage.search_add_related_product_input, search_products[0])
      .waitForExistAndClick(AddProductPage.related_product_item)
      .waitAndSetValue(AddProductPage.search_add_related_product_input, search_products[1])
      .waitForExistAndClick(AddProductPage.related_product_item)
  }

  addFeatureHeight(type) {
    if (type === 'pack') {
      this.client
        .scrollTo(AddProductPage.product_add_feature_btn, 50)
    }
    return this.client
      .scrollTo(AddProductPage.product_add_feature_btn, 150)
      .waitForExistAndClick(AddProductPage.product_add_feature_btn)
      .waitForExistAndClick(AddProductPage.feature_select_button)
      .waitForExistAndClick(AddProductPage.feature_select_option_height)
      .waitAndSetValue(AddProductPage.feature_custom_value_height, data.standard.features.feature1.custom_value)
  }

  addProductPriceTaxExcluded() {
    return this.client
      .scrollTo(AddProductPage.priceTE_shortcut, 50)
      .waitAndSetValue(AddProductPage.priceTE_shortcut, data.common.priceTE)
  }

}

module.exports = Product;