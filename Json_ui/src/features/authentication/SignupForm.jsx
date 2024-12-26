/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import SpinnerMini from "../../ui/SpinnerMini";

function SignupForm() {
  const { register, handleSubmit, getValues, formState } = useForm();

  const { signup, isPending } = useSignup();

  const { errors } = formState; //Formstate, formun durumu ile ilgili bilgiler sağlar. Genellikle formun doğrulama durumu, hata mesajları, formun geçerliliği gibi bilgileri içerir.

  const onSubmit = function (data) {
    signup(data);
  };

  const onError = function (err) {
    console.log(err);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Full Name" errors={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Username" errors={errors?.username?.message}>
          <Input
            type="text"
            id="username"
            {...register("username", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().username ||
                "Name and username cannot be the same ",
            })}
          />
        </FormRow>

        <FormRow
          label="Password (min 8 characters)"
          errors={errors?.password?.message}
        >
          <Input
            type="password"
            id="password"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
          />
        </FormRow>

        <FormRow
          label="Repeat password"
          errors={errors?.passwordConfirm?.message}
        >
          <Input
            type="password"
            id="passwordConfirm"
            {...register("password", {
              required: "This field is required",
              validate: (value) =>
                value != getValues().password
                  ? "Passwords need to match"
                  : undefined,
            })}
          />
        </FormRow>

        <FormRow label="Email" errors={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRow>

        <Button sizes="large" variation="secondary">
          {isPending ? <SpinnerMini /> : "Sign Up"}
        </Button>
        <p>
          Have an account?{" "}
          <Link className="text-blue-400 font-semibold" to="/login">
            Log in
          </Link>
        </p>
      </Form>
    </>
  );
}

export default SignupForm;

//kodu bi incele
//focuslarda renk degisimi bak belki iyi durur
//required falan belirle
