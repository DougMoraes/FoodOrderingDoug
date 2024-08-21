import { fireEvent, render, screen } from "@testing-library/react-native";
import { Text, View } from 'react-native';

import { getAsRegExp } from "@/components/__tests__/__utils__/utils";
import Button from "@/components/Button";
import { PizzaSize } from "@/types";

import CartContext, { useCart } from "../CartProvider";

describe('CartProvider', () => {
  test('provides expected obj to child elements', () => {
    //TODO: HOW TO CHECK FUNCTIONS HERE?

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
      }],
      addItem: () => {},
      updateQuantity: () => {},
      total: 30
    };

    const TestingComponent = () => {
      const { items, total, updateQuantity, addItem } = useCart();

      return (
        <View>
          <Text>{total}</Text>
          {items.map(item => {
            return (
              <Text key={item.id}>{item.id}</Text>
            )
          })}
          <Button text="updateQuantity" onPress={() => updateQuantity('1', 1)}/>
          <Button text="addItem" onPress={() => addItem(productMock, 'M')}/>
        </View>
      );
    };

    render(
      <CartContext.Provider value={cartItemMock}>
        <TestingComponent />
      </CartContext.Provider>,
    );

    const renderedTotal = screen.getAllByText(getAsRegExp(30));
    const renderedItem = screen.getAllByText(getAsRegExp('1543'));
    const renderedUpdateQuantity = screen.getAllByText(getAsRegExp('updateQuantity'));
    const renderedAddItem = screen.getAllByText(getAsRegExp('addItem'));

    fireEvent.press(renderedUpdateQuantity[0]);
    fireEvent.press(renderedAddItem[0]);


    expect(renderedTotal.length).toBe(1);
    expect(renderedItem.length).toBe(1);
  })
})
