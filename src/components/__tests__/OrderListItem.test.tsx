import { render, screen } from '@testing-library/react-native';
import { OrderStatus } from '@/types';
import { getAsRegExp } from './__utils__/utils';
import { mockOrder } from './__utils__/data';
import OrderListItem from '../OrderListItem';
import { renderRouter } from 'expo-router/testing-library';
import dayjs from 'dayjs';

test('shoud render OrderListItem', async () => {
  // This test is causing the warning:
  // Warning: An update to ForwardRef(NavigationContainerInner) inside a test was not wrapped in act(...).
  // When testing, code that causes React state updates should be wrapped into act(...):

  // Using act around the rederers returned an error.

  const now = dayjs();

  const orderMock = {
    id: 1,
    created_at: now.toString(),
    total: 27,
    user_id: '3',
    status: 'Cooking' as OrderStatus,
    order_items: [
      mockOrder,
    ],
  };

  renderRouter();
  render(<OrderListItem order={orderMock}/>)

  const renderedTitle = screen.getAllByText(getAsRegExp(orderMock.id));
  const renderedDate = screen.getAllByText(getAsRegExp(dayjs(orderMock.created_at).fromNow()));
  const renderedStatus = screen.getAllByText(getAsRegExp(orderMock.status));

  expect(renderedTitle.length).toBe(1);
  expect(renderedDate.length).toBe(1);
  expect(renderedStatus.length).toBe(1);
});