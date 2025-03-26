
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = "relative overflow-hidden rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
    outline: "bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300 focus:ring-offset-2",
  };
  
  const sizeStyles = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3",
  };
  
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "button-animation hover:shadow-md";
  
  return (
    <button
      type={type}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        disabledStyles,
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default AnimatedButton;
