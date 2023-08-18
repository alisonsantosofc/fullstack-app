import { render } from '@testing-library/react';
import { Toast } from './index.tsx';

test('Renders main page correctly', () => {
  render(<Toast type='success' title='Title' message='Message' />);

  expect(true).toBeTruthy();
});
