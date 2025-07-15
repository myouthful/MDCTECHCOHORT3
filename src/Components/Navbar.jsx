import { useState } from "react";
import { Menu, X } from "lucide-react";
import AuthBtn from "./AuthBtn";
import { Link } from "react-router-dom";
import LayOut from "../Layouts/Layout";

export default function Navbar() {
  const [isOpen, set_Is_open] = useState(false);

  return (
    <nav className="bg-[#F8F8F8] fixed w-full z-50">
      <div className="flex items-center justify-between h-[90px] px-4 md:px-[98px]">
        <Logo />

        <div className="hidden md:flex lg:flex  justify-between items-center gap-6 mr-40">
          <Links />
          <AuthBtn />
          
        </div>

        <div className="md:hidden">
          <button onClick={() => set_Is_open(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#F8F8F8] shadow-md py-4 px-4 flex flex-col gap-4">
          <Links />

          
          <AuthBtn />
        </div>
      )}
    </nav>
  );
}

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <img src="/Assets/logo.jpg" alt="logo" className="w-[44px] h-[40px]" />
      <div className="leading-tight">
        <h2 className="font-extrabold text-sm text-primary">Skill2Earn</h2>
        <p className="text-neutral font-bold text-xs">Where skills meet opportunity</p>
      </div>
    </div>
  );
}

function Links() {
  return (
    <ul className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
      <Link to="/"><li className="cursor-pointer hover:text-primary">Home</li></Link>
      <Link to="/about"><li className="cursor-pointer hover:text-primary">About Us</li></Link>
      <Link to="/faq"><li className="cursor-pointer hover:text-primary">FAQs</li></Link>
      <Link to="/contact_us"><li className="cursor-pointer hover:text-primary">Contact Us</li></Link>
    </ul>
  );
}
