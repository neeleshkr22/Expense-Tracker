import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

interface propsType {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  label: string;
  placeholder: string;
  type: string;
}

export const Input = ({ value, onChange, label, placeholder, type }: propsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <div className="mb-5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative mt-1">
        <input
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          className="w-full border rounded-lg py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition text-sm bg-gray-50"
          value={value}
          onChange={onChange}  // ✅ Correct binding
        />
        {type === 'password' && (
          <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer">
            {showPassword ? (
              <FaRegEye
                size={20}
                onClick={toggleShowPassword}
                className="text-primary"
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                onClick={toggleShowPassword}
                className="text-gray-400"
              />
            )}
          </span>
        )}
      </div>
    </div>
  );
};
