import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import useBookings from "./useBookings";

function BookingsTable() {
  // eslint-disable-next-line no-unused-vars
  const { bookingsData, isPending, error } = useBookings();
  if (isPending) return <Spinner />;
  console.log(bookingsData);

  return (
    <>
      <div>All Bookings</div>
      <Table column="0.5fr 1.1fr 1.7fr 0.8fr 1fr 0.5fr">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
        </Table.Header>
        <Table.Body>
          {bookingsData.map((booking) => (
            <BookingRow booking={booking} key={booking.id} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default BookingsTable;
