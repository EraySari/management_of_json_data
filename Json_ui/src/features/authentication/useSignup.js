import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (data) => userSignup(data),

    onSuccess: () => {
      console.log("succes");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { signup, isLoading };
}
