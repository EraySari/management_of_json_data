/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function ProtectedRouter({ children }) {
  // eslint-disable-next-line no-unused-vars

  const { userIsLogin } = useAuth();
  const isLogin = userIsLogin();
  const navigate = useNavigate();

  console.log(isLogin);
  // 1 - kullanici yoksa red
  useEffect(
    function () {
      console.log("effect ", isLogin);
      if (!isLogin) {
        //yükleme bitti ve user yok ise
        console.log("yok");
        navigate("/login", { replace: true });
      }
    },
    [isLogin, navigate]
  );

  // 2 - kullanici varsa onay ver
  if (isLogin) {
    return children;
  }
}

export default ProtectedRouter;
