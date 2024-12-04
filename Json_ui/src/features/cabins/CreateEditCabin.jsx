import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useCreateEditCabin } from "./useCreateEditCabin";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function CreateEditCabin({ isEdit = {}, user, onCloseModal }) {
  const { register, handleSubmit, formState, getValues } = useForm({
    defaultValues: isEdit ? isEdit : "",
  });
  const cabinID = isEdit ? isEdit.id : null;
  const { errors } = formState;
  console.log(isEdit);
  const { createEditMutate, isPending } = useCreateEditCabin();

  const onSubmit = function (data) {
    createEditMutate({
      cabinData: data,
      cabinID,
      user,
    });

    onCloseModal();
  };

  useEffect(() => {
    console.log("isLoading durumu değişti:", isPending);
  }, [isPending]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin Name" errors={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isPending}
          {...register("name", {
            required: "This field is required",
            minLength: { value: 3, message: "Min name length is 3" },
            maxLength: { value: 20, message: "Max name length is 20" },
          })}
        />
      </FormRow>
      <FormRow label="Capacity" errors={errors?.capacity?.message}>
        <Input
          type="text"
          id="maxCapacity"
          disabled={isPending}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Min capacity must be min 1" },
          })}
        />
      </FormRow>
      <FormRow label="Description" errors={errors?.description?.message}>
        <Input
          type="text"
          id="description"
          disabled={isPending}
          {...register("description", {
            required: "This field is required",
            min: { value: 1, message: "Min capacity must be min 1" },
          })}
        />
      </FormRow>
      <FormRow label="Regular Price" errors={errors?.price?.message}>
        <Input
          type="text"
          id="regularPrice"
          disabled={isPending}
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Min price must be min 1" },
          })}
        />
      </FormRow>
      <FormRow label="Discount" errors={errors?.discount?.message}>
        <Input
          type="text"
          id="discount"
          disabled={isPending}
          {...register("discount", {
            required: "This field is required",
            min: { value: 1, message: "Min capacity must be min 1" },
            validate: (currValue) =>
              currValue <= Number(getValues("regularPrice")) ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow>
        <Button onClick={onCloseModal} disabled={isPending}>
          Cancel
        </Button>
        <Button disabled={isPending}>
          {isEdit ? "Edit Cabin" : "Create Cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateEditCabin;
