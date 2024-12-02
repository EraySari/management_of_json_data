import { useMutation } from "@tanstack/react-query";
import userLogin from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";

export default function useLogin() {
  const { userLocal } = useAuth();

  const { mutate: loginMutate, isLoading: isLogin } = useMutation({
    mutationFn: ({ username, password }) => userLogin({ username, password }), // username ve
    //password bilgileri yollanarak post sorgusu yapiliyor. Db de varsa bilgiler dönüyor
    //bu bilgilerle btoa formatiyla birlikte locale kaydettim asagida

    onSuccess: (userData) => {
      //buradaki data mutationFn functiondan dönen degerdir. Passworda da ihtiyacim vardi ve
      //userloginden {data,password} seklinde return aldim
      console.log("Login sorgusu basarili");

      const authdata = window.btoa(
        `${userData.data.name}:${userData.password}`
      ); // btoa formatina dönüstürülüyor

      userLocal(JSON.stringify({ ...userData.data, authdata })); //locale kaydediliyor
    },

    onError: (err) => {
      console.log("Login sorgusu basarisiz. HATA!!", err.message);
    },
  });

  return { loginMutate, isLogin };
}
