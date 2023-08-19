import { render, fireEvent } from '@testing-library/react';

import { SearchBar } from './index.tsx';

jest.mock('../../services/api.ts');

describe('SearchBar', () => {
  it('fetches users based on query', async () => {
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

    const mockApiResponse = { data: users };
    const mockApiGet = jest.fn().mockResolvedValue(mockApiResponse);
    require('../../services/api.ts').api.get = mockApiGet;

    const { getByPlaceholderText } = render(
      <SearchBar />,
    );

    const input = getByPlaceholderText('search');

    const query = 'example query';
    fireEvent.change(input, { target: { value: query } });
  });
});
