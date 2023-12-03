import React from 'react';
import Input from '../..';

import { UseFormRegister } from "react-hook-form";

import "./styles/index.css";

export interface SearchInputProps {
  register: UseFormRegister<any>;
  rules: Record<string, any>;
}

const SearchInput: React.FC<SearchInputProps> = ({  register, rules }) => {
  return (
    <Input 
        register={register}
        registerName='search'
        rules={rules}
        placeholder='Buscar...'
        type='text'
        id='search-data'
    />
  );
};

export default SearchInput;