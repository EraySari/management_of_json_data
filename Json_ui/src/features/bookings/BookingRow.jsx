/* eslint-disable react/prop-types */

import {
  dateFormat,
  differenceDateText,
  differenceInDate,
} from "../../helpers";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import DeleteModalText from "../../ui/DeleteModalText";
import useDeleteBooking from "./useDeleteBooking";
import { useAuth } from "../../context/AuthContext";
import { HiEye } from "react-icons/hi2";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function BookingRow({ booking }) {
  const { deleteBookingMutate } = useDeleteBooking();

  const { getUser } = useAuth();
  const user = getUser();

  const navigate = useNavigate();

  return (
    <Table.Row>
      <div className="text-base font-medium">{booking.cabin.name}</div>
      <div>
        <div>{booking.user.name}</div>
        <div className="text-sm text-gray-500">{booking.user.email}</div>
      </div>

      <div className="text-sm">
        <div>
          {dateFormat(booking.startDate)} - {dateFormat(booking.endDate)}
        </div>
        <div className="text-gray-500">
          {differenceDateText(differenceInDate(booking.startDate))}
        </div>
        {/* JSX'in icinde dogrudan if
        kullanamayiz( ? : veya yardimci fonk olustur) */}
      </div>
      <div>{booking.status}</div>
      <div className="font-medium">{booking.totalPrice}</div>

      <div>
        <Modal>
          <Modal.Open modalName="delete">
            <button>
              <HiOutlineTrash color="#FB4B4E" size={18} />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <DeleteModalText
              name={booking.cabin.name}
              type="booking"
              onConfirm={() =>
                deleteBookingMutate({ user, bookingID: booking.id })
              }
            />
          </Modal.Window>
        </Modal>

        <button onClick={() => navigate(`/bookings/${booking.id}`)}>
          <HiEye color="gray" size={18} />
        </button>
      </div>
    </Table.Row>
  );
}

export default BookingRow;
