import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useAuth } from "../../context/AuthContext";

function useBookings() {
  const { getUser } = useAuth();
  const user = getUser();

  const {
    data: bookingsData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => getBookings(user),
  });
  return { bookingsData, isPending, error };
}

export default useBookings;
