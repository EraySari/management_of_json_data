/* eslint-disable no-unused-vars */
import styled from "styled-components";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import {
  HiCurrencyDollar,
  HiMiniCheck,
  HiMiniClipboardDocumentList,
  HiMiniEnvelope,
  HiMiniHome,
  HiMiniUser,
  HiMiniUserGroup,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import useCabin from "../features/cabins/useCabin";
import { useAuth } from "../context/AuthContext";
import { getMe } from "../services/apiAuth";
import { useGetMe } from "../features/authentication/useGetMe";
import Spinner from "./Spinner";
import { useState } from "react";
import { addDays, differenceInDays, format } from "date-fns";
import useCreateBooking from "../features/bookings/useCreateBooking";

const SytledBox = styled.div`
  background-color: #f5f5f7;
  border: 1px solid #f5f5f7;
  border-radius: 7px;
  overflow: hidden;
  margin-bottom: 2rem;
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

const BookingInfos = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  gap: 1rem;
  color: #8e9290;
  font-size: 0.8rem;

  & p {
    font-weight: 500;
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & span {
    font-weight: 500;
    color: black;
  }
`;

const BookingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & svg {
    width: 22px;
    height: 22px;
  }
`;

const DateSection = styled.div`
  background-color: #eeeff0;
  display: flex;
  flex-direction: column;
  align-items: center;

  & p {
    font-weight: 600;
  }
`;

const BookingBody = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1.4rem;
`;

const BookingOptions = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  gap: 0.7rem;
  color: #8e9290;
  border-top: 2px solid #eeeff0;

  & p {
    font-weight: 500;
  }

  & svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & span {
    font-weight: 500;
    color: black;
  }
`;

const Extras = styled.input``;

const Label = styled.label`
  color: black;
`;

const BookingOption = styled.div``;

const BookingButton = styled.button`
  padding: 0.4rem;
  background-color: #53929f;
  color: #f5f5f7;
  border-radius: 15px;
  &:hover {
    background-color: #217486;
  }
`;

function CreateBookingInfo() {
  const { cabinData } = useCabin();
  const { userData, isPending } = useGetMe();
  const { createBookingMutate, isCreating } = useCreateBooking();

  const { getUser } = useAuth();
  const user = getUser();

  const [extra, setExtra] = useState(false);
  const [guestCount, setGuestCount] = useState(1);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const difference = differenceInDays(
    new Date(state[0].endDate),
    new Date(state[0].startDate)
  );

  if (isPending) return <Spinner />;
  const { email, name: userName, id: userID } = userData;
  const {
    name,
    id: cabinID,
    maxCapacity,
    description,
    regularPrice: cabinPrice,
    discount,
  } = cabinData;

  const extraPrices = extra
    ? (difference + 1) * 20 * (Number(guestCount) + 1)
    : 0;
  const datePrice = (difference + 1) * cabinPrice;
  const totalBookingPrice = extraPrices + datePrice;

  const bookingData = {
    isPaid: false,
    cabinPrice,
    extrasPrice: 50,
    totalPrice: 500,
    numGuests: Number(guestCount),
    status: "Confirmed",
    startDate: format(state[0].startDate, "yyyy-MM-dd"),
    endDate: format(state[0].endDate, "yyyy-MM-dd"),
    numNights: difference,
    user: {
      id: userID,
    },
    cabin: {
      id: cabinID,
    },
  };

  console.log(bookingData);

  function onSubmit(e) {
    e.preventDefault();

    createBookingMutate({ user, bookingData });
  }

  return (
    <SytledBox>
      <StyledHeader>
        <div>
          <HiOutlineHomeModern />
          Make a Booking
        </div>
      </StyledHeader>
      <BookingBody>
        <BookingInfos>
          <BookingInfo>
            <HiMiniHome />
            <span>Cabin Name:</span>
            <p>{name}</p>
          </BookingInfo>
          <BookingInfo>
            <HiMiniUserGroup />
            <span>Capacity:</span>
            <p>{maxCapacity}</p>
          </BookingInfo>
          <BookingInfo>
            <HiMiniClipboardDocumentList />
            <span>Description:</span>
            <p>{description}</p>
          </BookingInfo>
          <BookingInfo>
            <HiCurrencyDollar />
            <span>Regular Price:</span>
            <p>{cabinPrice}$</p>
          </BookingInfo>
          <BookingInfo>
            <HiMiniCheck />
            <span>Discount:</span>
            <p>{discount}$</p>
          </BookingInfo>
          <BookingInfo>
            <HiMiniUser />
            <span>Booking holder: </span>
            <p>{userName}</p>
          </BookingInfo>
          <BookingInfo>
            <HiMiniEnvelope />
            <span>Email: </span>
            <p>{email}</p>
          </BookingInfo>

          <BookingOptions>
            <BookingOption>
              <Label htmlFor="isBreakfast">
                Would you like to include breakfast? It costs <span>$20</span>{" "}
                per person.
              </Label>
              <Extras
                type="checkbox"
                id="isBreakfast"
                checked={extra}
                onChange={(e) => setExtra(!extra)}
              />
            </BookingOption>
            <BookingOption>
              <Label htmlFor="guestCount">
                How many people will accompany you?
              </Label>
              <select
                id="guestCount"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              >
                {Array.from({ length: maxCapacity }, (_, i) => (
                  <option value={i} key={i}>
                    {i === 0 ? "Just Me" : `${i} Guests`}
                  </option>
                ))}
              </select>
            </BookingOption>
          </BookingOptions>
          <div>
            <p>{`Cabin Price: (${cabinPrice}*${
              difference + 1
            }) ${datePrice}$`}</p>
            <p>{`Extra Price: ${extraPrices}$ for ${difference + 1} days and ${
              Number(guestCount) + 1
            } people`}</p>
            <p>{`Total Price: ${totalBookingPrice}$`}</p>
          </div>
          <BookingButton onClick={(e) => onSubmit(e)}>
            Book {totalBookingPrice}$
          </BookingButton>
        </BookingInfos>
        <DateSection>
          <p>Choose Date Ranges</p>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={2}
            direction="horizontal"
          />
        </DateSection>
      </BookingBody>
    </SytledBox>
  );
}

export default CreateBookingInfo;

// TODO:
//sayfa düzenini ayarla cok karisik oldu. Onsubmite de bak farkli bir yol olabilir mi diye
// footer siparis kismini duzenle
// modal pencere ac
//login signup kisimlarini yap bundan önce protected router yap, logout apisi oluyo mu bak cok hizli gecis oluyo
