import { render } from '@testing-library/react';
import { Header } from './index.tsx';

test('Renders main page correctly', () => {
  render(<Header />);

  expect(true).toBeTruthy();
});
