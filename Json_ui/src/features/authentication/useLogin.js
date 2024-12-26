import { useMutation } from "@tanstack/react-query";
import userLogin from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const { userLocal } = useAuth();
  const navigate = useNavigate();

  const { mutate: loginMutate, isPending: isLogin } = useMutation({
    mutationFn: ({ username, password }) => userLogin({ username, password }), // username ve
    //password bilgileri yollanarak post sorgusu yapiliyor. Db de varsa bilgiler dönüyor
    //bu bilgilerle btoa formatiyla birlikte locale kaydettim asagida

    onSuccess: (userData) => {
      //buradaki data mutationFn functiondan dönen degerdir. Passworda da ihtiyacim vardi ve
      //userloginden {data,password} seklinde return aldim
      console.log("Login sorgusu basarili");

      console.log(userData);
      const authdata = window.btoa(`${userData.username}:${userData.password}`); // btoa formatina dönüstürülüyor

      userLocal(JSON.stringify({ ...userData.data, authdata })); //locale kaydediliyor

      navigate("/home", { replace: true }); // kullanici ana ekrana atiliyor

      toast.success(`Successfully logined. Welcome ${userData.username}`);
    },

    onError: (err) => {
      console.log("Login sorgusu basarisiz. HATA!!", err.message);
    },
  });

  return { loginMutate, isLogin };
}
