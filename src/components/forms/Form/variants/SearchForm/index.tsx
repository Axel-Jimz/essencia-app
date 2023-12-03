import React from "react";
import { SearchFormProps } from "./props";
import Form from "../..";
import { useForm } from "react-hook-form";
import { firebaseSearchUsersByUsername } from "../../../../../services/firebase/functions/data/read/firebaseSearchUsersByUsername";
import SearchInput from "../../../Input/variants/SearchInput";
import SearchButton from "../../../../buttons/AsynchRoundFormButton/variants/SearchButton";

import "./styles/index.css";

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
