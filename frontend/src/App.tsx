import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { X } from '@phosphor-icons/react';
import { Header } from './components/Header/index.tsx';
import { UsersList } from './components/UsersList/index.tsx';
import { Footer } from './components/Footer/index.tsx';

function App() {
  return (
    <div id="app" className="h-screen bg-zinc-900">
      <Header />
      <UsersList />
      <Footer />

      <ToastContainer
        autoClose={4000}
        className="min-w-[476px] pr-4 pt-4"
        toastClassName="w-full p-4 font-medium text-white bg-zinc-700 w-full"
        icon={false}
        closeButton={({ closeToast }) => (
          <span
            className="text-zinc-300 hover:text-zinc-400 mr-2"
            onClick={closeToast}
          >
            <X fontSize={20}/>
          </span>
        )}
        progressStyle={{
          background: 'linear-gradient(to right, #60A5FA, #4ADE80, #FACC15)',
        }}
      />
    </div>
  );
}

export default App;
