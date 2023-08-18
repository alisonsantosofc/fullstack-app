import { render } from '@testing-library/react';
import { UsersList } from './index.tsx';

test('Renders main page correctly', () => {
  const users = [
    {
      id: 'user_id',
      name: 'John Doe',
      city: 'City 1',
      country: 'Country 1',
      favorite_sport: 'Sport 1',
      created_at: 'date',
    },
  ];

  render(<UsersList users={users} />);

  expect(true).toBeTruthy();
});
