import {
  createContext, Dispatch, ReactNode, SetStateAction, useContext, useState,
} from 'react';

import { User } from '../@types/User.ts';

interface UsersProviderProps {
  children: ReactNode;
}

interface UsersContextData {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
}

const UsersContext = createContext<UsersContextData>(
  {} as UsersContextData,
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
