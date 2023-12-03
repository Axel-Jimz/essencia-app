import React from 'react';
import AsynchRectangleFormButton from '../..';

export interface UpdatePersonalDataButtonProps {
    isSubmitting: boolean;
}

const UpdatePersonalDataButton: React.FC<UpdatePersonalDataButtonProps> = ({ isSubmitting }) => {
  return (
    <AsynchRectangleFormButton isSubmitting={isSubmitting} bg='blue'>
        Actualizar datos
    </AsynchRectangleFormButton>
  );
};

export default UpdatePersonalDataButton;