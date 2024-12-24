import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userLogout } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const { removeFromLocal } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logoutMutate, isPending } = useMutation({
    mutationFn: userLogout,

    onSuccess: () => {
      console.log("Cikis Basarili");
      removeFromLocal();
      navigate("/login");
      queryClient.removeQueries();
      toast.success("Successfully logout");
    },

    onError: (err) => {
      console.log("Logout basarisiz. HATA!!", err.message);
    },
  });
  return { logoutMutate, isPending };
}

export default useLogout;
