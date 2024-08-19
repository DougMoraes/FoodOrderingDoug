import { render, screen } from '@testing-library/react-native';
import Button from '../Button';
import { getAsRegExp } from './__utils__/utils';

test('shoud render Button', async () => {
  const testText = 'TestText'

  render(<Button text={testText}/>)

  const rendered = screen.getAllByText(getAsRegExp(testText));

  expect(rendered.length).toBe(1);
});
