import React from 'react';
import { cn } from '../lib/utils';

interface NoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
  color?: 'pink' | 'green' | 'blue' | 'yellow';
  onDelete?: () => void;
}

const colorClasses: Record<string, string> = {
  pink: 'bg-pink-100 text-pink-900',
  green: 'bg-green-100 text-green-900',
  blue: 'bg-blue-100 text-blue-900',
  yellow: 'bg-amber-100 text-amber-900',
};

export const NoteCard = React.forwardRef<HTMLDivElement, NoteCardProps>(
  ({ title, content, color = 'pink', onDelete, className, ...props }, ref) => {
    const colorClass = colorClasses[color] || colorClasses.pink;
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-xl p-8 shadow-lg border border-gray-200 [box-shadow:0_10px_25px_-5px_rgba(0,0,0,0.1)]',
          colorClass,
          className
        )}
        {...props}
      >
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base leading-relaxed whitespace-pre-wrap opacity-80">{content}</p>
      </div>
    );
  }
);

NoteCard.displayName = 'NoteCard';
