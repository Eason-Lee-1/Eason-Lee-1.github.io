/* import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Link } from "@nextui-org/react";

const NavBar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand className=" ">
        <Link
          color="foreground"
          href="#"
          className="text-inherit text-2xl p-4 rounded-lg font-Kode"
        >
          Eason Lee
        </Link>
      </NavbarBrand>
      <NavbarContent justify="end" className="font-Kode">
        <Link color="foreground" href="#">
          Skills
        </Link>
        <Link color="foreground" href="#">
          Projects
        </Link>
        <Link color="foreground" href="#">
          CV
        </Link>
        <Link color="foreground" href="#">
          Contact
        </Link>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
 */

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Skills", "Projects", "CV", "Contact"];
  const idxItems = ["#skills", "#projects", "#cv", "#contact"];

  return (
    <Navbar className="font-Kode" isBordered onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="#" color="foreground" className="text-inherit text-2xl">
            Eason Lee
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="#skills" color="foreground">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#projects" aria-current="page">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#cv" color="foreground">
            CV
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact" color="foreground">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className=" bg-foreground">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full font-Kode text-secondary "
              href={idxItems[index]}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
