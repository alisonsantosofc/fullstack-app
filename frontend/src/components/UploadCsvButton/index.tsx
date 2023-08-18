import { FileArrowUp } from '@phosphor-icons/react';

export function UploadCsvButton() {
  return (
    <button className="flex items-center gap-2 py-2 px-6 rounded text-gray-700 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 hover:from-blue-300 hover:via-green-300 hover:to-yellow-300 transition-all">
      <span>Upload csv file</span>
      <FileArrowUp fontSize={24} />
    </button>
  );
}
