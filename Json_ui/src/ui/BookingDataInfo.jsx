/* eslint-disable no-unused-vars */
import styled from "styled-components";
import useBooking from "../features/bookings/useBooking";
import {
  HiMiniUsers,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import { dateFormat, differenceInDate, differenceDateText } from "../helpers";
import DataItem from "./DataItem";

const SytledBox = styled.div`
  background-color: #f5f5f7;
  border: 1px solid #f5f5f7;
  border-radius: 7px;
  overflow: hidden;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #217486;
  border: none;
  padding: 0.8rem 2rem;
  color: #f5f5f7;
  font-size: 0.9rem;
  font-weight: 500;

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.4rem;
    font-size: 1.1rem;
    font-weight: 600;
  }

  & svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;

const Body = styled.section`
  padding: 1.8rem 2rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #8e9290;

  & p:first-of-type {
    font-weight: 500;
    color: black;
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }
`;
const Price = styled.div`
  background-color: #f5f8b9;
  color: #865b17;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.6rem;

  & svg {
    color: #865b17;
  }

  & p:last-child {
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 600;
  }
`;

const BreakFast = styled.div``;

function BookingDataInfo() {
  const { bookingData } = useBooking();

  const {
    cabinPrice,
    id: bookingId,
    startDate,
    endDate,
    extrasPrice,
    totalPrice,
    isPaid,
    numGuests,
    numNights,
    status,
    cabin: { name: cabinName },
    user: { name: userName, email },
  } = bookingData;

  const breakfast = false;

  return (
    <SytledBox>
      <StyledHeader>
        <div>
          <HiOutlineHomeModern />
          {numNights} nights in Cabin {cabinName}
        </div>

        <p>
          {dateFormat(startDate)} (
          {differenceDateText(differenceInDate(startDate))}) -{" "}
          {dateFormat(endDate)}
        </p>
      </StyledHeader>
      <Body>
        <User>
          <HiMiniUsers />{" "}
          <p>
            {userName[0].toUpperCase() + userName.slice(1)}{" "}
            {numGuests > 1 ? `+ ${numGuests - 1}` + " guests" : ""}
          </p>{" "}
          <span>&bull;</span> <p>{email}</p>
        </User>
        <DataItem
          icon={<HiOutlineCheckCircle />}
          label="Breakfast included?"
          breakFast="yes"
        >
          {breakfast ? "Yes" : "No"}
        </DataItem>

        <Price>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            ${cabinPrice + extrasPrice} (${cabinPrice} cabin + ${extrasPrice}{" "}
            breakfast)
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Body>
    </SytledBox>
  );
}

export default BookingDataInfo;
