import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCreateBooking() {
  const navigate = useNavigate();
  const { mutate: createBookingMutate, isPending: isCreating } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: ({ user, bookingData }) => createBooking(user, bookingData),

    onSuccess: (data) => {
      console.log(data);
      toast.success("Booking successfully created");
      navigate(`/bookings/${data.id}`);
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createBookingMutate, isCreating };
}

export default useCreateBooking;
