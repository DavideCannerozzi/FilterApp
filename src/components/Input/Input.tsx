import { InputProps } from './Input.interface';
import React from 'react';

const Input: React.FC<InputProps> = ({ getValue, inputValue }) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={getValue}
      />
    </div>
  );
};

export default React.memo(Input);
