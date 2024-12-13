/* eslint-disable no-unused-vars */
import useBooking from "./useBooking";
import Spinner from "../../ui/Spinner";
import Heading from "../../ui/Heading";
import Tag from "../../ui/Tag";
import useMoveBack from "../../context/hooks/useMoveBack";
import ButtonBack from "../../ui/ButtonBack";
import Row from "../../ui/Row";
import BookingDataInfo from "../../ui/BookingDataInfo";

function BookingDetails() {
  const { bookingData, isPending } = useBooking();

  const moveBack = useMoveBack();

  console.log(isPending);
  if (isPending) {
    return <Spinner />;
  }

  //for heading and tag
  const { id: bookingId, status } = bookingData;

  return (
    <>
      <Row>
        <div className="flex items-center gap-10">
          <Heading as="h2">{`Booking #${bookingId}`}</Heading>
          <Tag>{status}</Tag>
        </div>
        <ButtonBack onClick={moveBack}>&larr; Back</ButtonBack>
      </Row>
      <BookingDataInfo />
    </>
  );
}

export default BookingDetails;
