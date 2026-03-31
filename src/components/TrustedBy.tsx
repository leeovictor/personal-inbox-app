import React from 'react';
import { StatsGroup, Stats } from './index';

interface Stat {
  value: string;
  label: string;
}

interface TrustedByProps {
  title?: string;
  description?: string;
  stats?: Stat[];
}

export const TrustedBy: React.FC<TrustedByProps> = ({
  title = 'Trusted by creators worldwide',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing possimus.',
  stats = [
    { value: '8,000+', label: 'Creators on the platform' },
    { value: '3%', label: 'Flat platform fee' },
    { value: '999%', label: 'Uptime guarantee' },
    { value: '$70M', label: 'Paid out to creators' },
  ],
}) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-950 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">{description}</p>
        </div>

        {/* Stats Grid */}
        <StatsGroup>
          {stats.map((stat, index) => (
            <Stats key={index} value={stat.value} label={stat.label} />
          ))}
        </StatsGroup>
      </div>
    </div>
  );
};
