import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/AuthContext";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

function useBooking() {
  //booking id from param
  const { bookingId } = useParams();

  //user info
  const { getUser } = useAuth();
  const user = getUser();

  const {
    data: bookingData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["booking"],
    queryFn: () => getBooking(user, bookingId),
  });
  return { bookingData, isPending, error };
}

export default useBooking;
