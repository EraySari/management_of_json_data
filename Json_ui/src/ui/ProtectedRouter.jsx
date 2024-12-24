/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function ProtectedRouter({ children }) {
  // eslint-disable-next-line no-unused-vars

  const { userIsLogin } = useAuth();
  const isLogin = userIsLogin();
  const navigate = useNavigate();

  // 1 - IF we have NOT USER
  useEffect(
    function () {
      if (!isLogin) {
        //Loading is finished and we have no user
        navigate("/login", { replace: true });
      }
    },
    [isLogin, navigate]
  );

  // 2 - if we have USER
  if (isLogin) {
    return children;
  }
}

export default ProtectedRouter;
