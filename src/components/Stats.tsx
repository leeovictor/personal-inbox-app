import React from 'react';

interface StatsProps {
  value: string;
  label: string;
}

export const Stats: React.FC<StatsProps> = ({ value, label }) => {
  return (
    <div className="px-6 py-8 text-center transition-all hover:bg-gray-800/60 border-r border-gray-700 last:border-r-0 sm:last:border-r-0 sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(4n)]:border-r-0">
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-gray-400">{label}</div>
    </div>
  );
};
