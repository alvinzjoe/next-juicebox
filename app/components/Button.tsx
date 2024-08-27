"use client"
import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  variant: 'primary' | 'outline' | 'white' | 'icon';
  onClick?: () => void;
  size?: 'md' | 'sm',
  children?: React.ReactNode;
  icon?: IconType;
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  children,
  icon: Icon,
  size= 'md',
  className = '',
  disabled = false,
}) => {
  const baseClasses = 'text-sohne text-base transition-all duration-200 ease-in-out';
  
  const variantClasses = {
    primary: 'bg-[#CDAAFF] text-[#0C0D10] hover:bg-opacity-90',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10',
    white: 'bg-white text-[#0C0D10] hover:bg-opacity-90',
    // icon: 'bg-[rgba(255,255,255,0.1)] text-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)]',
    icon: `rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] ${disabled ? 'bg-[rgba(255,255,255,0.6)] text-white60' : 'bg-[rgba(255,255,255,0.1)] text-white'}`,
  };

  const sizeClasses = variant === 'icon' 
    ? `${size == "sm" ? 'w-8 h-8' : 'w-[60px] h-[60px]'} flex items-center justify-center`
    : 'h-[60px] w-full px-6 rounded-[23px]';

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses}
    ${className}
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {variant === 'icon' && Icon ? (
        <Icon size={24} />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;