import { PizzaSize } from "@/types";

export const mockProduct = {
  id: 1,
  image: null,
  name: 'PizzaTest',
  price: 25
};

export const mockOrder = {
  id: 1,
  product: mockProduct,
  order_id: 1,
  size: 'L' as PizzaSize,
  quantity: 1,
};