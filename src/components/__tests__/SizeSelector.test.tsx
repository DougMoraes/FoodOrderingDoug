import { fireEvent, render, screen } from "@testing-library/react-native";
import SizeSelector from "../SizeSelector";

describe('SizeSelector', () => {
  test('should call onPressSelect when option is clicked', () => {
    const mockOnPress = jest.fn();

    render(<SizeSelector onPressSelect={mockOnPress} selectedSize="L"/>)

    const renderedOption = screen.getAllByText('M');

    expect(renderedOption.length).toBe(1);

    fireEvent.press(renderedOption[0]);

    expect(mockOnPress).toHaveBeenCalled();
  })
});
