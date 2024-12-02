import Logo from "./Logo";
import NavList from "./NavList";

function SideBar() {
  return (
    <div className="px-7 py-6 bg-nature row-start-1 row-end-[-1] flex flex-col border-r border-gray-300">
      <Logo />
      <NavList />
    </div>
  );
}

export default SideBar;
