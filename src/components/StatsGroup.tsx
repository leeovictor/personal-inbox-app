import React from 'react';

interface StatsGroupProps {
  children: React.ReactNode;
}

export const StatsGroup: React.FC<StatsGroupProps> = ({ children }) => {
  return (
    <div className="rounded-lg border border-gray-700 bg-gray-700/50 backdrop-blur-sm overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};
