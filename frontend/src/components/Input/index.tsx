import { InputHTMLAttributes, useState } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export function Input({ ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
    className={`py-2 px-4 rounded bg-zinc-700 text-gray-300 border-2 ${
      isFocused
        ? 'border border-green-500' // Aplicar borda com gradiente quando focado
        : 'border-transparent'
    } outline-none placeholder-zinc-500`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}
