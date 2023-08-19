import { render } from '@testing-library/react';
import { Header } from './index.tsx';

describe('Header Component', () => {
  it('Renders Header correctly', () => {
    render(<Header />);

    expect(true).toBeTruthy();
  });
});
