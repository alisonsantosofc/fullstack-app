import {
  Bug, CheckCircle, Info, WarningCircle, WarningDiamond,
} from '@phosphor-icons/react';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'default';
}

export function Toast({ title, message, type }: ToastProps) {
  function setIcon() {
    switch (type) {
      case 'info':
        return <Info data-testid="toast-icon" fontSize={64} className="text-blue-500" />;

      case 'success':
        return <CheckCircle data-testid="toast-icon" fontSize={64} className="text-green-500" />;

      case 'warning':
        return <WarningDiamond data-testid="toast-icon" fontSize={64} className="text-yellow-500" />;

      case 'error':
        return <Bug data-testid="toast-icon" fontSize={64} className="text-red-500" />;

      default:
        return <WarningCircle data-testid="toast-icon" fontSize={64} className="text-blue-500" />;
    }
  }

  return (
    <div className="flex gap-4">
      {setIcon()}

      <div>
        <h4 className="text-xl mb-2 font-medium text-zinc-200">
          {title}
          </h4>
        <p className="text-base font-normal text-zinc-300">
          {message}
        </p>
      </div>
    </div>
  );
}
