import NavItem from "./NavItem";
import { useState } from "react";
import Image from "next/image";
import Logo from "../images/Logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex justify-between items-center py-6 px-3 border-b border-gray-300 ">
        <div className="w-28 h-auto">
          <Image src={Logo} alt="Logo" />
        </div>

        <div
          className={`block ${isOpen ? "hidden" : "block"}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Menu
        </div>
        <div
          className={`block ${!isOpen ? "hidden" : "block"}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Close
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col space-y-2 text-center">
          <NavItem text="Home" href="/" />
          <NavItem text="About" href="/about" />
          <NavItem text="Blog" href="/blog" />
        </ul>
      </div>
    </nav>
  );
}
