import { screen } from "@testing-library/react-native";
import { renderRouter } from "expo-router/testing-library";

import CreateProductScreen from "../create";

describe('CreateProductScreen', () => {
  test('it should render Create Page when Id param is not provided', () => {
    renderRouter({
      index: CreateProductScreen,
    });

    const renderedMainText = screen.getAllByText(`Create`);

    expect(renderedMainText.length).toBe(1);
  });

  test('it should render Update Page when Id param is provided', () => {
    renderRouter({
      create: CreateProductScreen,
    }, {
      initialUrl: '/create?id=1',
    });

    const renderedMainText = screen.getAllByText(`Update`);
    const renderedExtraButton = screen.getAllByText(`Delete`);

    expect(renderedMainText.length).toBe(1);
    expect(renderedExtraButton.length).toBe(1);
  });
});
