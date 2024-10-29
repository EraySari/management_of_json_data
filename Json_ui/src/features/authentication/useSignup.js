import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../../services/apiAuth";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: ({ name, username, password, email }) =>
      userSignup({ name, username, password, email }),

    onSuccess: () => {
      console.log("succes");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { signup, isLoading };
}
