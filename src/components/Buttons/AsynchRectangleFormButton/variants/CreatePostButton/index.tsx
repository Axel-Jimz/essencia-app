import React from 'react';
import AsynchRectangleFormButton from '../..';

export interface CreatePostButtonProps {
    isSubmitting: boolean;
}

const CreatePostButton: React.FC<CreatePostButtonProps> = ({ isSubmitting }) => {
  return (
    <AsynchRectangleFormButton isSubmitting={isSubmitting} bg='blue'>
        Crear publicación
    </AsynchRectangleFormButton>
  );
};

export default CreatePostButton;