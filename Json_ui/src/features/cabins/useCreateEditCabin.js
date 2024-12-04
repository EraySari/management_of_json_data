import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateEditCabin() {
  const clientQuery = useQueryClient();

  const { isPending, mutate: createEditMutate } = useMutation({
    mutationFn: ({ cabinData, cabinID, user }) =>
      createEditCabin(cabinData, cabinID, user),

    onError: (err) => {
      toast.error(`${err}`);
    },

    onSuccess: () => {
      clientQuery.invalidateQueries({
        queryKey: ["cabins"],
      });

      toast.success("Cabin successfully edited");
    },
  });
  return { createEditMutate, isPending };
}
