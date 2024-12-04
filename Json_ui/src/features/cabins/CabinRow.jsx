import { HiOutlinePencilSquare, HiOutlineTrash } from "react-icons/hi2";
import Button from "../../ui/Button";
import Table from "../../ui/Table";

/* eslint-disable react/prop-types */
function CabinRow({ cabin }) {
  console.log(cabin);
  // eslint-disable-next-line no-unused-vars
  const { name, discount, maxCapacity, description, regularPrice } = cabin;

  return (
    <Table.Row>
      <div></div>
      <div className="text-base font-semibold">{name}</div>
      <div className="text-sm">Fits up to {maxCapacity} guests</div>
      <div className="font-semibold">{regularPrice}</div>
      <div className=" text-green-700 font-medium">{discount}</div>

      <div className="flex justify-between">
        <Button>
          <HiOutlinePencilSquare size={20} />
        </Button>
        <Button>
          <HiOutlineTrash color="#FB4B4E" size={20} />
        </Button>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
