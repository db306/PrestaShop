scenario('Change order state to "Delivred"', client => {
  test('should open the browser', () => client.open());
  test('should sign in the Back Office', () => client.signinBO());
  test('should go to orders menu', () => client.goToOrdersMenu());
  test('should go to first order', () => client.goToFirstOrder());
  test('should change order state to "Delivered"', () => client.changeOrderState('Delivered'));
  test('should get order quantity', () => client.getOrderQuantity());
}, 'change_order_status', true);
