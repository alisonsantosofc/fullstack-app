import {
  Bug, CheckCircle, Info, WarningCircle, WarningDiamond,
} from '@phosphor-icons/react';

interface ToastProps {
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export function Toast({ title, message, type }: ToastProps) {
  function setIcon() {
    switch (type) {
      case 'info':
        return <Info fontSize={64} className="text-blue-500" />;
        break;
      case 'success':
        return <CheckCircle fontSize={64} className="text-green-500" />;
        break;
      case 'warning':
        return <WarningDiamond fontSize={64} className="text-yellow-500" />;
        break;
      case 'error':
        return <Bug fontSize={64} className="text-red-500" />;
        break;
      default:
        return <WarningCircle fontSize={64} className="text-blue-500" />;
        break;
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
