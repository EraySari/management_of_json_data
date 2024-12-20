import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getCabin } from "../../services/apiCabins";

function useCabin() {
  //booking id from param
  const { bookingId } = useParams();

  //user info
  const { getUser } = useAuth();
  const user = getUser();

  const {
    data: cabinData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["cabin"],
    queryFn: () => getCabin(user, bookingId),
  });
  return { cabinData, isPending, error };
}

export default useCabin;
