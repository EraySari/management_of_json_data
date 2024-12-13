import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import CreateEditCabin from "./CreateEditCabin";

import DeleteModalText from "../../ui/DeleteModalText";
import useDeleteCabin from "./useDeleteCabin";
import { useAuth } from "../../context/AuthContext";

/* eslint-disable react/prop-types */
function CabinRow({ cabin }) {
  const { id: cabinID, name, discount, maxCapacity, regularPrice } = cabin;
  const { isDeleting, deleteMutate } = useDeleteCabin();

  const { getUser } = useAuth();
  const user = getUser();

  return (
    <Table.Row>
      <div></div>
      <div className="text-base font-medium">{name}</div>
      <div className="text-sm">Fits up to {maxCapacity} guests</div>
      <div className="font-medium">{regularPrice}</div>
      <div className=" text-green-700 font-medium"> {discount}</div>

      <div className="flex justify-between">
        <Modal>
          <Modal.Open modalName="editCabin">
            <button>
              <HiOutlinePencilSquare size={20} />
            </button>
          </Modal.Open>
          <Modal.Window name="editCabin">
            <CreateEditCabin isEdit={cabin} user={user} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open modalName="delete">
            <button>
              <HiOutlineTrash color="#FB4B4E" size={20} />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <DeleteModalText
              name={name}
              type="cabin"
              onConfirm={() => deleteMutate({ user, cabinID })}
              disabled={isDeleting}
            />
          </Modal.Window>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
