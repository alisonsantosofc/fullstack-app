import { ChangeEvent, useRef } from 'react';
import { FileArrowUp } from '@phosphor-icons/react';
import { toast } from 'react-toastify';

import { Toast } from '../Toast/index.tsx';
import { api } from '../../services/api.ts';

export function UploadCsvButton() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleButtonClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  async function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        await api.post('/files', formData);

        toast.success(
          <Toast
            type="success"
            title="Uploaded successfully"
            message="Users successfully saved on the database."
          />,
        );

        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } catch (error) {
        toast.error(
          <Toast
            type="error"
            title="Error uploading"
            message={`Error pocessing file: ${error}`}
          />,
        );
      }
    }
  }

  return (
    <button
      onClick={handleButtonClick}
      className="flex items-center gap-2 py-2 px-6 rounded text-gray-700 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 hover:from-blue-300 hover:via-green-300 hover:to-yellow-300 transition-all"
    >
      <span>Upload csv file</span>
      <FileArrowUp fontSize={24} />
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
    </button>
  );
}
