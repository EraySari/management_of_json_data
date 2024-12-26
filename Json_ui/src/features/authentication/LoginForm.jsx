import { useState } from "react";
import useLogin from "./useLogin";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormVertical from "../../ui/FormVertical";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { loginMutate, isLogin } = useLogin();

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!(username && password)) {
      setIsError(true);
      return;
    }

    try {
      loginMutate(
        { username, password },
        {
          onSettled: () => {
            setUsername("");
            setPassword("");
          },
        }
      ); // onSucces ise btoa cevirme locale kaydetme falan orda yapar

      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormVertical label="Username">
        <Input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormVertical>
      <FormVertical label="Password">
        <Input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormVertical>
      <FormVertical>
        <Button sizes="large" variation="secondary">
          {isLogin ? <SpinnerMini /> : "Log in"}
        </Button>
        <p>
          Dont have an account?{" "}
          <Link className="text-blue-400 font-semibold" to="/signup">
            Signup
          </Link>
        </p>
      </FormVertical>
    </Form>
  );
}

export default LoginForm;
