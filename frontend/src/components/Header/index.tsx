import { Input } from '../Input/index.tsx';

import logo from '../../assets/images/logo.svg';
import { UploadCsvButton } from '../UploadCsvButton/index.tsx';

export function Header() {
  return (
    <header className="fixed w-screen h-20 flex justify-center bg-zinc-800 shadow-md">
      <nav className="w-[996px] py-4 flex justify-between">
        <div className='flex gap-4'>
          <img src={logo} width={120}/>

          <div className="w-[1px] h-full bg-zinc-600"></div>

          <Input />
        </div>

        <UploadCsvButton />
      </nav>
    </header>
  );
}
