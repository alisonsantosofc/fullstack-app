import { UploadCsvButton } from '../UploadCsvButton/index.tsx';

import { SearchBar } from '../SearchBar/index.tsx';

export function Header() {
  return (
    <header className="fixed w-screen h-20 flex justify-center bg-zinc-800 shadow-md px-4 lg:px-0">
      <nav className="w-[996px] py-4 flex justify-between gap-4">
        <div className='flex items-center gap-4'>
          <img src={'../../assets/images/logo.svg'} width={120} className="hidden lg:block"/>

          <div className="w-[1px] h-full bg-zinc-600 hidden lg:block"></div>

          <SearchBar />
        </div>

        <UploadCsvButton />
      </nav>
    </header>
  );
}
