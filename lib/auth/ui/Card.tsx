import React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full rounded-xl border bg-white text-gray-900 shadow-sm
        ${className}
      `}
    >
      {children}
    </div>
  );
};

type CardHeaderProps = {
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
};

const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  description,
  className = "",
}) => {
  return (
    <div className={`space-y-1 ${className}`}>
      <div className="text-lg font-semibold">{title}</div>

      {description && (
        <div className="text-sm text-gray-500">
          {description}
        </div>
      )}
    </div>
  );
};

export  { Card, CardHeader };