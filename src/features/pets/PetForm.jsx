import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import InputCheckbox from "../../ui/InputCheckbox";
import InputField from "../../ui/InputField";
import InputSelect from "../../ui/InputSelect";
import InputTextarea from "../../ui/InputTextArea";
import toast from "react-hot-toast";

function PetForm({ title }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    toast.dismiss();
    Object.keys(errors).forEach((key) => {
      toast.error(errors[key].message);
    });
  }

  return (
    <div className="text-brown">
      <h2 className="mb-7 text-2xl font-bold">{title}</h2>
      <form
        className="grid grid-cols-3 items-start gap-x-10 gap-y-5"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <InputSelect
          id="petType"
          label="نوع پت*"
          options={["سگ", "گربه", "طوطی"]}
          register={register}
        />
        <InputField
          id="petName"
          label="اسم پت*"
          type="text"
          register={register}
          validationRules={{ required: "اسم پت خود را وارد کنید" }}
        />
        <InputSelect
          id="petGender"
          label="جنس پت*"
          options={["نر", "ماده"]}
          register={register}
        />
        <InputField
          id="petRace"
          label="نژاد پت*"
          type="text"
          register={register}
          validationRules={{ required: "نژاد پت خود را وارد کنید" }}
        />
        <InputField
          id="petBirthYear"
          label="سال تولد پت*"
          type="number"
          register={register}
          validationRules={{
            required: "سال تولد پت خود را وارد کنید",
            pattern: {
              value: /^1[34]\d{2}$/,
              message:
                "سال تولد نامعتبر است. سال را بین 1300 تا 1499 وارد کنید",
            },
          }}
        />
        <InputField
          id="petVaccinationCount"
          label="تعداد واکسناسیون پت*"
          type="number"
          register={register}
          validationRules={{
            required: "تعداد واکسناسیون پت خود را وارد کنید",
            min: {
              value: 0,
              message: "تعداد واکسناسیون نمی تواند منفی باشد",
            },
            max: {
              value: 50,
              message: "تعداد واکسناسیون نمی تواند بیشتر از 50 باشد",
            },
            valueAsNumber: true,
            validate: {
              isInteger: (value) =>
                Number.isInteger(value) || "تعداد واکسناسیون باید یک عدد باشد",
            },
          }}
        />
        <InputTextarea id="petDisease" label="بیماری" register={register} />
        <InputTextarea id="petFeed" label="تغذیه" register={register} />
        <InputField
          id="petWeight"
          label="آپلود عکس پت"
          type="file"
          accept=".png, .jpg, .jpeg"
          register={register}
          validationRules={{
            validate: {
              acceptedFormats: (files) => {
                if (!files.length) return true; // No file selected, validation passes
                return (
                  ["image/png", "image/jpeg", "image/jpg"].includes(
                    files[0]?.type,
                  ) || "فرمت فایل باید png، jpg یا jpeg باشد"
                );
              },
            },
          }}
        />
        <InputTextarea id="petDescription" label="توضیحات" />
        <div className="mt-7 self-start">
          <InputCheckbox id="isPetSterile" label="عقیم است؟" />
        </div>
        <div className="col-span-3 mr-auto mt-6 gap-3">
          <Button
            additionalStyles="flex items-center justify-center gap-2 py-2.5 px-5"
            type="submit"
            variation="primary"
          >
            <img src="/icons/add-icon.svg" className="w-5" />
            <span>افزودن پت</span>
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PetForm;
