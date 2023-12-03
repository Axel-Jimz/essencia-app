import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Form from "../..";
import UpdateUsernameInput from "../../../Input/variants/UpdateUsernameInput";
import UpdateBiographyTextarea from "../../../Textarea/variants/UpdateBiographyTextarea";
import ChangeProfilePicture from "../../../ImageInput/variants/ChangeProfilePicture";

import "./styles/index.css";
import UpdatePersonalDataButton from "../../../../buttons/AsynchRectangleFormButton/variants/UpdatePersonalDataButton";
import { firebaseUpdatePersonalData } from "../../../../../services/firebase/functions/data/uptate/firebaseUpdatePersonalData";
import { UserModelContext } from "../../../../../state/contexts/UserModelContext";

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
      successTitle=""
      successDescription=""
      errorTitle=""
      errorDescription=""
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
            maxLength: 80,
            pattern: /^[A-Za-z0-9\s.,!?_-ñ]{10,80}$/,
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
