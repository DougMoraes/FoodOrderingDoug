import { render, screen } from "@testing-library/react-native";

import { getAsRegExp } from "@/components/__tests__/__utils__/utils";
import CartContext from "@/providers/CartProvider";
import { PizzaSize } from "@/types";

import CartScreen from '../cart';

describe('CartScreen', () => {
  test('it should render screen', () => {
    const productMock = {
      id: 1,
      image: null,
      name: 'PizzaTest',
      price: 25
    };

    const cartItemMock = {
      items: [{
        id: '1543',
        product: productMock,
        product_id: 1,
        size: 'L' as PizzaSize,
        quantity: 1
      },
      {
        id: '1544',
        product: productMock,
        product_id: 1,
        size: 'M' as PizzaSize,
        quantity: 1
      }],
      addItem: () => {},
      updateQuantity: () => {},
      total: 50
    };

    render(
      <CartContext.Provider value={cartItemMock}>
        <CartScreen />
      </CartContext.Provider>
    );

    const renderedTotal = screen.getAllByText(getAsRegExp(50));
    const renderedButton = screen.getAllByText(getAsRegExp(`Checkout`));
    const renderedName = screen.getAllByText(getAsRegExp(cartItemMock.items[0].product.name));

    expect(renderedName.length).toBe(cartItemMock.items.length);
    expect(renderedTotal.length).toBe(1);
    expect(renderedButton.length).toBe(1);
  })
});
