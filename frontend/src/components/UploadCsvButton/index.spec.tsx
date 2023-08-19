import { fireEvent, render, waitFor } from '@testing-library/react';
import { toast } from 'react-toastify';
import { UploadCsvButton } from './index.tsx';
import { Toast } from '../Toast/index.tsx';

jest.mock('../../services/api.ts');

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
  },
}));

describe('UploadCsvButton Component', () => {
  it('handles file upload', async () => {
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

    const mockApiResponse = {
      data: users,
    };
    const mockApiGet = jest.fn().mockResolvedValue(mockApiResponse);
    require('../../services/api.ts').api.get = mockApiGet;

    const { getByText, getByTestId } = render(
      <UploadCsvButton />,
    );

    const uploadButton = getByText('Upload csv file');
    const fileInput = getByTestId('file-input');

    fireEvent.click(uploadButton);
    fireEvent.change(fileInput, { target: { files: [new File([''], 'test.csv', { type: 'text/csv' })] } });
  });

  it('handles error during file upload', async () => {
    const mockApiPost = jest.fn().mockRejectedValue(new Error('API error'));
    require('../../services/api.ts').api.post = mockApiPost;

    const { getByText, getByTestId } = render(<UploadCsvButton />);

    const uploadButton = getByText('Upload csv file');
    const fileInput = getByTestId('file-input');

    fireEvent.click(uploadButton);
    fireEvent.change(fileInput, { target: { files: [new File([''], 'test.csv', { type: 'text/csv' })] } });

    await waitFor(() => expect(toast.error).toHaveBeenCalledWith(
      <Toast
        type="error"
        title="Error uploading"
        message="Error pocessing file: Error: API error"
      />,
    ));
  });
});
