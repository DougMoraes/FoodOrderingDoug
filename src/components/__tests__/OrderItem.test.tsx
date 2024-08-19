import { render, screen } from '@testing-library/react-native';

import OrderItem from '@/components/OrderItem';

import { mockOrder } from './__utils__/data';
import { getAsRegExp } from './__utils__/utils';

test('shoud render OrderItem', async () => {
  render(<OrderItem item={mockOrder}/>)

  const renderedName = screen.getAllByText(getAsRegExp(mockOrder.product.name));
  const renderedPrice = screen.getAllByText(getAsRegExp(mockOrder.product.price));
  const renderedSize = screen.getAllByText(getAsRegExp(mockOrder.size));
  const renderedQuantity = screen.getAllByText(getAsRegExp(mockOrder.quantity));

  expect(renderedName.length).toBe(1);
  expect(renderedPrice.length).toBe(1);
  expect(renderedSize.length).toBe(1);
  expect(renderedQuantity.length).toBe(1);

});
