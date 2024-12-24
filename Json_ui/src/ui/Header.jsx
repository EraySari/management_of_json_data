import Logout from "../features/authentication/Logout";

function Header() {
  return (
    <div className="px-5 py-5 bg-nature flex justify-between">
      <p className="">Header</p>
      <Logout />
    </div>
  );
}

export default Header;
