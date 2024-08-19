import { render, screen } from '@testing-library/react-native';
import CartListItem from '../CartListItem';
import { PizzaSize } from '@/types';
import { getAsRegExp } from './__utils__/utils';
import { mockProduct } from './__utils__/data';

test('shoud render CartListItem', async () => {

  const mockCartItem = {
    id: '1',
    product: mockProduct,
    product_id: 1,
    size: 'L' as PizzaSize,
    quantity: 1,
  };

  render(<CartListItem cartItem={mockCartItem}/>)

  const renderedName = screen.getAllByText(getAsRegExp(mockCartItem.product.name));
  const renderedPrice = screen.getAllByText(getAsRegExp(mockCartItem.product.price));
  const renderedSize = screen.getAllByText(getAsRegExp(mockCartItem.size));
  const renderedQuantity = screen.getAllByText(getAsRegExp(mockCartItem.quantity));

  expect(renderedName.length).toBe(1);
  expect(renderedPrice.length).toBe(1);
  expect(renderedSize.length).toBe(1);
  expect(renderedQuantity.length).toBe(1);
});
