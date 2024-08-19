import { render, screen } from '@testing-library/react-native';
import OrderItem from '@/components/OrderItem';
import { PizzaSize } from '@/types';
import { getAsRegExp } from './__utils__/utils';
import { mockProduct } from './__utils__/data';

test('shoud render OrderItem', async () => {
  const orderMock = {
    id: 1,
    product_id: 1,
    products: mockProduct,
    order_id: 1,
    size: 'L' as PizzaSize,
    quantity: 1,
  }

  render(<OrderItem item={orderMock}/>)

  const renderedName = screen.getAllByText(getAsRegExp(orderMock.products.name));
  const renderedPrice = screen.getAllByText(getAsRegExp(orderMock.products.price));
  const renderedSize = screen.getAllByText(getAsRegExp(orderMock.size));
  const renderedQuantity = screen.getAllByText(getAsRegExp(orderMock.quantity));

  expect(renderedName.length).toBe(1);
  expect(renderedPrice.length).toBe(1);
  expect(renderedSize.length).toBe(1);
  expect(renderedQuantity.length).toBe(1);

});