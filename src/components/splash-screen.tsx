import { cx } from 'class-variance-authority'; // Optional utility for combining classes

export const SplashScreen = ({ className = '' }) => {
  return (
    <div
      className={cx(
        'fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-gray-800 z-[1400] p-6',
        className
      )}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-t-transparent border-gray-900 dark:border-white rounded-full animate-spin" />
      </div>
    </div>
  );
};
