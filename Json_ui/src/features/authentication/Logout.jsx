import Button from "../../ui/Button";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";

import Modal from "../../ui/Modal";
import LogoutModal from "../../ui/LogoutModal";
import { useAuth } from "../../context/AuthContext";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logoutMutate, isPending } = useLogout();
  const { getUser } = useAuth();
  const user = getUser();
  const name = JSON.parse(user).name;
  console.log(user);
  return (
    <Modal>
      <Modal.Open modalName="logout">
        <Button disabled={isPending}>
          {isPending ? <SpinnerMini /> : <HiArrowRightOnRectangle />}
        </Button>
      </Modal.Open>

      <Modal.Window name="logout">
        <LogoutModal
          name={name}
          onConfirm={() => logoutMutate()}
          disabled={isPending}
        />
      </Modal.Window>
    </Modal>
  );
}

export default Logout;
