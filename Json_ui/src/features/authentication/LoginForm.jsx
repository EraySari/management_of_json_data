import { useState } from "react";
import useLogin from "./useLogin";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const { loginMutate, isLogin } = useLogin();

  const handleSubmit = function (e) {
    e.preventDefault();
    loginMutate({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
