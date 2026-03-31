import React from 'react';
import { cn } from '../lib/utils';

interface NoteChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'pink' | 'green' | 'blue' | 'yellow';
  isActive?: boolean;
}

const colorClasses: Record<string, string> = {
  pink: 'bg-pink-200 text-pink-900 hover:bg-pink-300',
  green: 'bg-green-200 text-green-900 hover:bg-green-300',
  blue: 'bg-blue-200 text-blue-900 hover:bg-blue-300',
  yellow: 'bg-amber-200 text-amber-900 hover:bg-amber-300',
};

const baseClasses =
  'px-4 py-2 rounded-full font-semibold text-sm transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600 disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap min-w-[100px] max-w-[280px] truncate';

export const NoteChip = React.forwardRef<HTMLButtonElement, NoteChipProps>(
  ({ color = 'pink', isActive, className, ...props }, ref) => {
    const colorClass = colorClasses[color] || colorClasses.pink;
    const activeClass = isActive 
      ? 'ring-2 ring-offset-2 ring-offset-white ring-gray-400' 
      : 'opacity-50 hover:opacity-70';

    return (
      <button
        ref={ref}
        className={cn(baseClasses, colorClass, activeClass, className)}
        {...props}
      />
    );
  }
);

NoteChip.displayName = 'NoteChip';
