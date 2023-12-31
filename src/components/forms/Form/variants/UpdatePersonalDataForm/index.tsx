import React, { useContext, useState } from "react";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";
import { useForm } from "react-hook-form";
import Form from "../..";
import UpdateUsernameInput from "../../../Input/variants/UpdateUsernameInput";
import UpdateBiographyTextarea from "../../../Textarea/variants/UpdateBiographyTextarea";
import ChangeProfilePicture from "../../../ImageInput/variants/ChangeProfilePicture";
import UpdatePersonalDataButton from "../../../../buttons/AsynchRectangleFormButton/variants/UpdatePersonalDataButton";
import { firebaseUpdatePersonalData } from "../../../../../services/firebase/functions/data/uptate/firebaseUpdatePersonalData";

import "./styles/index.css";

const UpdatePersonalDataForm: React.FC = () => {
  const [resetImageInput, setResetImageInput] = useState<boolean>(false);

  const { userId } = useContext(UserModelContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    await firebaseUpdatePersonalData(userId, data)
    reset();
    setResetImageInput(true);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      id="update-personal-data"
    >
      <div>
        <ChangeProfilePicture
          register={register}
          resetImageInput={resetImageInput}
          setResetImageInput={setResetImageInput}
        />
      </div>

      <div>
        <UpdateUsernameInput
          register={register}
          rules={{
            minLength: 5,
            maxLength: 15,
            pattern: /^[A-Za-z][A-Za-z0-9_]{4,15}$/,
          }}
          errors={errors}
        />
        <UpdateBiographyTextarea
          register={register}
          rules={{
            minLength: 10,
            maxLength: 150,
          }}
          errors={errors}
        />
      </div>

      <div>
        <UpdatePersonalDataButton isSubmitting={isSubmitting} />
      </div>
    </Form>
  );
};

export default UpdatePersonalDataForm;
