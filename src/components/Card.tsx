import React from 'react';
import { cn } from '../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('bg-gray-800 shadow-sm ring-1 ring-white/10 rounded-xl', className)}
    {...props}
  />
));

CardRoot.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, description, className, children, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-5 border-b border-gray-700', className)} {...props}>
      {title && <h3 className="text-base font-semibold text-white">{title}</h3>}
      {description && <p className="mt-1 text-sm text-gray-400">{description}</p>}
      {children}
    </div>
  )
);

CardHeader.displayName = 'Card.Header';

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-6 py-5 space-y-4', className)} {...props} />
  )
);

CardContent.displayName = 'Card.Content';

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('px-6 py-4 border-t border-gray-700 flex items-center gap-3', className)}
      {...props}
    />
  )
);

CardFooter.displayName = 'Card.Footer';

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
});
