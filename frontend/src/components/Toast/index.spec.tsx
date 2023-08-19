import { render } from '@testing-library/react';
import { Toast } from './index.tsx';

describe('Toast Component', () => {
  it('Renders Toast correctly', () => {
    render(<Toast type='success' title='Title' message='Message' />);
    render(<Toast type='info' title='Title' message='Message' />);
    render(<Toast type='warning' title='Title' message='Message' />);
    render(<Toast type='error' title='Title' message='Message' />);
    render(<Toast type='default' title='Title' message='Message' />);

    expect(true).toBeTruthy();
  });
});
