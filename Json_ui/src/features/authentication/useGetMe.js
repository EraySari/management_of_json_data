import { useQuery } from "@tanstack/react-query";
import { getMe } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";

export function useGetMe() {
  const { getUser } = useAuth();
  const user = getUser();
  const { data: userData, isPending } = useQuery({
    queryFn: () => getMe(user),
    queryKey: ["user"],

    onSuccess: () => {
      console.log("succes");
    },
    onError: (err) => {
      console.log(err.message);
    },
  });

  return { userData, isPending };
}
