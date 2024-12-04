import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

function useDeleteCabin() {
  const clientQueries = useQueryClient();
  const {
    mutate: deleteMutate,
    isLoading: isDeleting,
    error,
  } = useMutation({
    mutationFn: ({ user, cabinID }) => deleteCabin({ user, cabinID }),
    //deletede keye gerek yok
    onSuccess: () => {
      clientQueries.invalidateQueries({
        queryKey: ["cabins"],
      });
      toast.success("Cabin successfully deleted");
    },

    onError: (err) => toast.error(`${err}`),
  });

  return { deleteMutate, isDeleting, error };
}

export default useDeleteCabin;
