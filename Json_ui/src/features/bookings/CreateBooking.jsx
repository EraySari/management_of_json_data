/* eslint-disable no-unused-vars */
import useMoveBack from "../../context/hooks/useMoveBack";
import ButtonBack from "../../ui/ButtonBack";
import CreateBookingInfo from "../../ui/createBookingInfo";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import useCabin from "../cabins/useCabin";

function CreateBooking() {
  const moveBack = useMoveBack();
  const { cabinData, isPending } = useCabin();

  if (isPending) return <Spinner />;
  const { name, maxCapacity, description, regularPrice, discount } = cabinData;
  return (
    <>
      <Row>
        <div className="flex items-center gap-10">
          <Heading as="h2">{`Book Cabin ${name}`}</Heading>
        </div>

        <ButtonBack onClick={moveBack}>&larr; Back</ButtonBack>
      </Row>
      <CreateBookingInfo />
    </>
  );
}

export default CreateBooking;
