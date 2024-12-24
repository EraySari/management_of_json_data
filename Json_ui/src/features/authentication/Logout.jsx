import { useQueryClient } from "@tanstack/react-query";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

function Logout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { userLogout } = useAuth();

  function handleLogout() {
    userLogout();
    queryClient.removeQueries();
    navigate("/login");
  }

  return (
    <Button onClick={() => handleLogout()}>
      <HiArrowRightOnRectangle />
    </Button>
  );
}

export default Logout;
