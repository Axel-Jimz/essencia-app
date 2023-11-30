import React, { Dispatch, SetStateAction } from "react";
import Form from "../..";
import { useForm } from "react-hook-form";
import { firebaseSearchUsersByUsername } from "../../../../../services/firebase/functions/data/read/firebaseSearchUsersByUsername";
import SearchInput from "../../../Input/variants/SearchInput";
import SearchButton from "../../../../buttons/AsynchRoundFormButton/variants/SearchButton";

import "./styles/index.css";

export interface SearchFormProps {
  setUsers: Dispatch<SetStateAction<any[]>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ setUsers }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const users = await firebaseSearchUsersByUsername(data.search);
    setUsers(users);
    reset();
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      successTitle=""
      successDescription=""
      errorTitle=""
      errorDescription=""
      id="search"
    >
      <SearchInput register={register} rules={{ required: true }} />

      <div>
        <SearchButton isSubmitting={isSubmitting} />
      </div>
    </Form>
  );
};

export default SearchForm;
