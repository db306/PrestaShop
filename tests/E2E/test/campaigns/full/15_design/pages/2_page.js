const {AccessPageBO} = require('../../../../selectors/BO/access_page');
const common_scenarios = require('./pages');

let pageData = {
  meta_title: 'page',
  meta_description: 'page meta description',
  meta_keyword: ["keyword", "page"]
};

let newPageData = {
  meta_title: 'editpage',
  meta_description: 'edit page meta description',
  meta_keyword: ["edit"]
};

scenario('Create, edit, delete and delete with bulk actions page', client => {

  scenario('Open the browser and connect to the BO', client => {
    test('should open the browser', () => client.open());
    test('should log in successfully in BO', () => client.signInBO(AccessPageBO));
  }, 'common_client');

  common_scenarios.createPage(pageData);
  common_scenarios.checkPageBO(pageData.meta_title);
  common_scenarios.checkPageFO(pageData.meta_title);
  common_scenarios.editPage(pageData, newPageData);

  scenario('logout successfully from the Back Office', client => {
    test('should logout successfully from the Back Office', () => client.signOutBO());
  }, 'common_client');


}, 'common_client');