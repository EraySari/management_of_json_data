import { useState } from "react";
import useLogin from "./useLogin";
import { useAuth } from "../../context/AuthContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const { loginMutate, isLogin } = useLogin();

  const { userIsLogin } = useAuth();
  // eslint-disable-next-line no-unused-vars
  const isLoggedIn = userIsLogin();

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!(username && password)) {
      setIsError(true);
      return;
    }

    try {
      loginMutate({ username, password }); // onSucces ise btoa cevirme locale kaydetme falan orda yapar
      setUsername("");
      setPassword("");
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  // if (isLoggedIn) return <Navigate to={"/"} />;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Login</button>
    </form>
  );
}

export default LoginForm;
