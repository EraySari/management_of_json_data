import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

function CabinTable() {
  // eslint-disable-next-line no-unused-vars
  const { cabinsData, isLoading } = useCabins();

  if (isLoading) return <Spinner />; // hata burasiymis. Ben direkt cabinsDatayi
  //alip yazdirmaya calistim ama yuklerken yani isLoading true iken
  //cabinsData undefined dönüyor yani daha degerler yüklenmemis
  //o yüzden asagidaki mapte hata veriyordu. Bunu engellemek icin
  // yüklemenin bitip bitmedigini isLoading ile kontrol ediyorum
  return (
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
  );
}

export default CabinTable;
