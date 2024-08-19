import { randomUUID } from 'expo-crypto';
import { createContext, PropsWithChildren, useContext, useState } from 'react';

import { CartItem, Product } from '@/types';

type CartType = {
  items: CartItem[],
  addItem: (product: Product, size: CartItem['size']) => void,
  updateQuantity: (id: string, quantity: number) => void,
  total: number
}

const CartContext = createContext<CartType>({
  items: [],
  addItem: () => {},
  updateQuantity: () => {},
  total: 0,
});

export default function CartProvider({children} : PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: CartItem['size']) => {
    const existingItem = items.find(item => (item.product_id === product.id && item.size === size));

    if (existingItem) {
      updateQuantity(existingItem.id, 1);
      return null;
    }

    const newCartItem : CartItem = {
      id: randomUUID(),
      product,
      product_id: product.id,
      size,
      quantity: 1
    };

    setItems([newCartItem, ...items]);
  }

  const updateQuantity = (cartItemId: string, qtd: number) => {
    var updatedItems = items.map(
      item => item.id !== cartItemId ?
        item :
        {...item, quantity: item.quantity + qtd}
      );

    updatedItems = updatedItems.filter(item => item.quantity > 0)

    setItems(updatedItems);
  };

  const total = items.reduce(
    (sum, item) => sum += item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{
        items,
        addItem,
        updateQuantity,
        total
      }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);
