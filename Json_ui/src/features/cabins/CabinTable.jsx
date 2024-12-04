import { useAuth } from "../../context/AuthContext";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import CreateEditCabin from "./CreateEditCabin";
import { useCabins } from "./useCabins";

function CabinTable() {
  // eslint-disable-next-line no-unused-vars
  const { cabinsData, isLoading } = useCabins();
  const { getUser } = useAuth();
  const user = getUser();

  if (isLoading) return <Spinner />; // hata burasiymis. Ben direkt cabinsDatayi
  //alip yazdirmaya calistim ama yuklerken yani isLoading true iken
  //cabinsData undefined dönüyor yani daha degerler yüklenmemis
  //o yüzden asagidaki mapte hata veriyordu. Bunu engellemek icin
  // yüklemenin bitip bitmedigini isLoading ile kontrol ediyorum
  return (
    <div className="flex flex-col">
      {/* TODO: Cabin List Table */}
      <Table column="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body>
          {cabinsData.map((cabin) => (
            <CabinRow cabin={cabin} key={cabin.id} />
          ))}
        </Table.Body>
      </Table>

      {/* TODO: Add Cabin Button */}
      <Modal>
        <Modal.Open modalName="createCabin">
          <Button sizes="large" variation="secondary">
            Create a new cabin
          </Button>
        </Modal.Open>
        <Modal.Window name="createCabin">
          <CreateEditCabin user={user} />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CabinTable;
