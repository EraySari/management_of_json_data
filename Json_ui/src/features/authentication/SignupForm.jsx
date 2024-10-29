/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { register, handleSubmit } = useForm();

  const { signup, isLoading } = useSignup();

  const onSubmit = function (data) {
    const { name, username, password, email } = data;
    // console.log(data);
    signup({ name, username, password, email });
  };
  const onError = function (err) {
    console.log(err);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <label id="name">Name</label>
          <input type="text" id="name" {...register("name")} />
        </div>
        <div>
          <label id="password">Password</label>
          <input type="password" id="username" {...register("password")} />
        </div>
        <div>
          <label id="username">Username</label>
          <input type="text" id="username" {...register("username")} />
        </div>
        <div>
          <label id="email">Email</label>
          <input type="email" id="email" {...register("email")} />
        </div>
        <button>Sign Up</button>
      </form>
    </>
  );
}

export default SignupForm;
