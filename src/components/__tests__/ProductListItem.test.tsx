import { render, screen } from '@testing-library/react-native';
import { renderRouter } from 'expo-router/testing-library';

import ProductListItem from '../ProductListItem';
import { mockProduct } from './__utils__/data';
import { getAsRegExp } from './__utils__/utils';

describe('ProductListItem', () => {
  test('shoud render', async () => {
    // This test is causing the warning:
    // Warning: An update to ForwardRef(NavigationContainerInner) inside a test was not wrapped in act(...).
    // When testing, code that causes React state updates should be wrapped into act(...):

    // Using act around the rederers returned an error.

    renderRouter();
    render(<ProductListItem product={mockProduct}/>)

    const renderedName = screen.getAllByText(getAsRegExp(mockProduct.name));
    const renderedPrice = screen.getAllByText(getAsRegExp(mockProduct.price));

    expect(renderedName.length).toBe(1);
    expect(renderedPrice.length).toBe(1);
  });
});
