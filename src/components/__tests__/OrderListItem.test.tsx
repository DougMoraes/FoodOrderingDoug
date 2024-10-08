import { act, render, screen } from '@testing-library/react-native';
import dayjs from 'dayjs';
import { renderRouter } from 'expo-router/testing-library';

import { OrderStatus } from '@/types';

import OrderListItem from '../OrderListItem';
import { mockOrder } from './__utils__/data';
import { getAsRegExp } from './__utils__/utils';

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

  await act(async () => {
    expect(renderedTitle.length).toBe(1);
    expect(renderedDate.length).toBe(1);
    expect(renderedStatus.length).toBe(1);
  })

});
