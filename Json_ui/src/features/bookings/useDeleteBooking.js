import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteBooking } from "../../services/apiBookings";

import toast from "react-hot-toast";

function useDeleteBooking() {
  const clientQueries = useQueryClient();
  const {
    mutate: deleteBookingMutate,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: ({ user, bookingID }) => deleteBooking(user, bookingID),

    onSuccess: () => {
      toast.success("Booking successfully deleted");
      clientQueries.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteBookingMutate, isPending, error };
}

export default useDeleteBooking;
