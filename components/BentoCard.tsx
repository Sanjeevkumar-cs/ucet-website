import React from 'react';

interface BentoCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  delay?: number;
}

export default function BentoCard({
  icon,
  title,
  description,
  className = '',
  children,
  delay = 0,
}: BentoCardProps) {
  const delayClass = delay > 0 ? `animate-in-delay-${Math.min(delay, 3)}` : '';

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:border-accent/50 hover:-translate-y-1 ${delayClass} ${className}`}
    >
      {/* Gradient background on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="mb-2 text-lg font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{description}</p>
        {children}
      </div>
    </div>
  );
}
