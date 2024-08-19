import { fireEvent, render, screen } from "@testing-library/react-native";

import StatusSelector from "../StatusSelector";

describe('StatusSelector', () => {
  test('should call onPressSelect when option is clicked', () => {
    const mockOnPress = jest.fn();

    render(<StatusSelector onPressSelect={mockOnPress} selectedStatus="Delivered"/>)

    const renderedOption = screen.getAllByText('Delivering');

    expect(renderedOption.length).toBe(1);

    fireEvent.press(renderedOption[0]);

    expect(mockOnPress).toHaveBeenCalled();
  })
});
