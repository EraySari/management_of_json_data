import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import { useAuth } from "../../context/AuthContext";

export function useCabins() {
  const { getUser } = useAuth();
  const user = getUser(); //localden useri aliyoruz cunku istekte auth icin lazim olacak

  const {
    data: cabinsData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: () => getCabins(user),
  });

  return { cabinsData, isLoading, error };
}
