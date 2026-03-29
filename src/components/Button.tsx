import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const variantClasses: Record<string, string> = {
  primary: 'bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700',
  secondary: 'bg-gray-700 text-gray-100 hover:bg-gray-600 active:bg-gray-800',
  ghost: 'bg-transparent text-gray-300 hover:bg-gray-700/50 hover:text-white',
  outline: 'border border-gray-600 text-gray-200 bg-transparent hover:bg-gray-700/50',
  destructive: 'bg-red-600 text-white hover:bg-red-500 active:bg-red-700',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-xs rounded',
  md: 'px-4 py-2 text-sm rounded-md',
  lg: 'px-5 py-2.5 text-base rounded-md',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-150 cursor-pointer';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, ...props }, ref) => {
    const variantClass = variantClasses[variant] || variantClasses.primary;
    const sizeClass = sizeClasses[size] || sizeClasses.md;

    return (
      <button
        ref={ref}
        className={cn(baseClasses, variantClass, sizeClass, className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
