import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({ 
  value, 
  onChange, 
  placeholder = '', 
  className = '' 
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`px-3 py-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};

export default Input;