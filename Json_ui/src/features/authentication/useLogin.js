import { useMutation } from "@tanstack/react-query";
import userLogin from "../../services/apiAuth";

export default function useLogin() {
  const { mutate: loginMutate, isLoading: isLogin } = useMutation({
    mutationFn: ({ username, password }) => userLogin({ username, password }),

    onSuccess: () => {
      console.log("Login sorgusu basarili");
    },

    onError: (err) => {
      console.log("Login sorgusu basarisiz. HATA!!", err.message);
    },
  });
  return { loginMutate, isLogin };
}
