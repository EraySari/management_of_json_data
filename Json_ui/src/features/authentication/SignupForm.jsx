/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import styled from "styled-components";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

function SignupForm() {
  const { register, handleSubmit } = useForm();

  const { signup, isLoading } = useSignup();

  const onSubmit = function (data) {
    signup(data);
  };

  const onError = function (err) {
    console.log(err);
  };
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <FormRow label="Full Name">
          <Input type="text" id="name" {...register("name")} />
        </FormRow>

        <FormRow label="Username">
          <Input type="text" id="username" {...register("username")} />
        </FormRow>

        <FormRow label="Password">
          <Input type="password" id="password" {...register("password")} />
        </FormRow>

        <FormRow label="Repeat password">
          <Input type="password" id="password" {...register("password")} />
        </FormRow>

        <FormRow label="Email">
          <Input type="email" id="email" {...register("email")} />
        </FormRow>

        <button>Sign Up</button>
      </Form>
    </>
  );
}

export default SignupForm;

//kodu bi incele
//focuslarda renk degisimi bak belki iyi durur
//required falan belirle
