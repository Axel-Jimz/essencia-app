import React, { useContext } from 'react';
import { FormProps } from "./props"
import { NotificationsContext } from '../../../state/contexts/NotificationsContext';
import { useForm } from 'react-hook-form';

import "./styles/index.css";
import "./styles/theme.css";

const Form: React.FC<FormProps> = ({ children, id, onSubmit, successTitle, successDescription, errorTitle, errorDescription }) => {
  const { showNotification } = useContext(NotificationsContext);
  const { handleSubmit } = useForm();
  const classes = ['form'];

  const termino = (status: string) => {
    if (status === 'success') {
      showNotification('success', successTitle , successDescription)
    } else {
      showNotification('error', errorTitle, errorDescription)
    }
  };

  return (
    <form
      className={classes.join(' ')}
      onSubmit={(event) => {
        handleSubmit(onSubmit)(event)
          .then(() => termino('success'))
          .catch((error) => termino(error));
      }}
      encType="multipart/form-data"
      id={id}
    >
      {children}
    </form>
  );
};

export default Form;
