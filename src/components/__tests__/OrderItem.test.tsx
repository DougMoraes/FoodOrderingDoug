import { render, screen } from '@testing-library/react-native';
import OrderItem from '@/components/OrderItem';
import Constants from '@/constants/Constants';
import dayjs from 'dayjs';
import { PizzaSize } from '@/types';

test('shoud render OrderItem', async () => {
  const now = dayjs();

  const orderMock = {
    id: 1,
    product_id: 1,
    products: {
      id: 1,
      image: Constants.defaultPizzaImage,
      name: 'TestPizza',
      price: 25,
    },
    order_id: 1,
    size: 'L' as PizzaSize,
    quantity: 1,
  }

  render(<OrderItem item={orderMock}/>)

  const renderedName = screen.getAllByText(orderMock.products.name);
  const renderedPrice = screen.getAllByText(`$${orderMock.products.price}`);
  const renderedSize = screen.getAllByText(`Size: ${orderMock.size}`);
  const renderedQuantity = screen.getAllByText(`Qtd: ${orderMock.quantity}`);

  expect(renderedName.length).toBe(1);
  expect(renderedPrice.length).toBe(1);
  expect(renderedSize.length).toBe(1);
  expect(renderedQuantity.length).toBe(1);

});