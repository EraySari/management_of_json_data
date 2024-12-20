/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useGetMe } from "../features/authentication/useGetMe";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRouter({ children }) {
  // eslint-disable-next-line no-unused-vars
  const { userData, isPending } = useGetMe();
  const navigate = useNavigate();

  console.log(userData);
  // 1 - kullanici yoksa red
  useEffect(
    function () {
      console.log("effect ", userData);
      if (!userData && !isPending) {
        //yükleme bitti ve user yok ise
        console.log("yok");
        navigate("/login");
      }
    },
    [userData, isPending, navigate]
  );

  if (isPending) return <Spinner />; //yükleme sirasinda spinner

  // 2 - kullanici varsa onay ver
  if (userData) {
    return children;
  }
}

export default ProtectedRouter;
