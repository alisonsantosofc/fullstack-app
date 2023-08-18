import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Input } from '../Input/index.tsx';
import { useUsers } from '../../hooks/useUsers.tsx';
import { api } from '../../services/api.ts';
import { Toast } from '../Toast/index.tsx';

export function SearchBar() {
  const { setUsers } = useUsers();

  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get(`/users?q=${query}`);

        setUsers(response.data);
      } catch (error) {
        toast.error(
          <Toast
            type="error"
            title="Error fetching"
            message={`Error during users fetch: ${error}`}
          />,
        );
      }
    };

    fetchUsers();
  }, [query]);

  return (
    <div>
      <Input
        type="text"
        placeholder="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
