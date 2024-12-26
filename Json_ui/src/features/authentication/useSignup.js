import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data) => userSignup(data),

    onSuccess: () => {
      console.log("succes");
      navigate("/signup", { replace: true });
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { signup, isPending };
}
