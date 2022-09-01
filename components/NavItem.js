import Link from "next/link";
import { useState } from "react";
import Button from "./Button";

export default function NavItem() {
  const Links = [
    { name: "Profile", link: "#profil" },
    { name: "Service", link: "#service" },
    { name: "Harga", link: "#harga" },
    { name: "Contact", link: "#download" },
  ];

  const [open, setOpen] = useState(false)
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div  className="md:flex items-center justify-between bg-white py-5 md:px-10 px-6">
        <img src="logo.png" alt="logo" className="mr-1 pt-2"/>
        <div onClick={() => setOpen(!open) } className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
        <img src={open ? 'x.svg' : 'menu.svg'}/>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-10 transtion-all duration-500 ease-in ${open ? 'top-20' : '-top-[490px]'}`}>
          {Links.map((Link, index) => (
            <li key={index} className="md:ml-8 text-base md:my-0 my-7">
              <a href={Link.link}>{Link.name}</a>
            </li>
          ))}
          <Button>
            Download
          </Button>
        </ul>
      </div>
    </div>
  );
}
