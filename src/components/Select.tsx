import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'value' | 'onChange'> {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Select = ({
  label,
  options,
  value,
  onChange,
  placeholder = 'Select an option...',
  className,
  ref,
  ...props
}: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);
    // Close dropdown when clicking outside
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (selectedValue: string) => {
      onChange?.(selectedValue);
      setIsOpen(false);
    };

    return (
      <div
        ref={containerRef}
        className={cn('relative w-full', className)}
        {...props}
      >
        {label && (
          <label className="block text-sm font-medium text-white mb-2">
            {label}
          </label>
        )}

        {/* Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'w-full px-4 py-2 text-left rounded-lg transition-colors',
            'border border-gray-600 bg-gray-800 text-gray-200',
            'hover:bg-gray-700/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
            isOpen && 'bg-gray-700 border-gray-500',
            'flex items-center justify-between'
          )}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <svg
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-5 h-5 text-gray-400"
            aria-hidden="true"
          >
            <path
              d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
              clipRule="evenodd"
              fillRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-gray-800 border border-gray-600 rounded-lg shadow-lg">
            {/* Options List */}
            <ul className="max-h-64 overflow-y-auto">
              {options.length > 0 ? (
                options.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => handleSelect(option.value)}
                      className={cn(
                        'w-full px-4 py-3 text-left text-sm transition-colors flex items-center justify-between',
                        value === option.value
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-800 text-gray-200 hover:bg-gray-700/50'
                      )}
                    >
                      <span>{option.label}</span>
                      {value === option.value && (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                ))
              ) : (
                <li className="px-4 py-3 text-sm text-gray-400">
                  No options available
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
};
