import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import './styles/index.css';
import { UsersProvider } from './hooks/useUsers.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
);
