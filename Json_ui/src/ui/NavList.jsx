import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi2";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiCalendarDays } from "react-icons/hi2";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { HiOutlineUser } from "react-icons/hi2";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 py-10 text-base font-medium text-gray-600">
      <li>
        <NavLink className="styledNavLink" to="/home">
          <HiOutlineHome size={25} /> Home
        </NavLink>
      </li>

      <li>
        <NavLink className="styledNavLink" to="/cabins">
          <HiOutlineHomeModern size={25} /> Cabins
        </NavLink>
      </li>

      <li>
        <NavLink className="styledNavLink" to="/bookings">
          <HiCalendarDays size={25} /> Bookings
        </NavLink>
      </li>

      <li>
        <NavLink className="styledNavLink" to="/users">
          <HiOutlineUser size={25} /> Users
        </NavLink>
      </li>

      <li>
        <NavLink className="styledNavLink" to="/settings">
          <HiOutlineCog6Tooth size={25} /> Settings
        </NavLink>
      </li>
    </ul>
  ); //global bi stylednavlist olustur hepsinde onu kullan
}

export default NavList;
