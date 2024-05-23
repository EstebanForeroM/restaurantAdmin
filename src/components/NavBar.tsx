import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/navbar";
import { UserButton } from "@clerk/clerk-react";
import {Link} from "@nextui-org/link";
import {ActiveWindow} from "../App";

interface NavBarProps {
    SetActiveWindow: React.Dispatch<React.SetStateAction<ActiveWindow>>;
    ActiveWindows: ActiveWindow;
}

export function NavBar( NavBarProps: NavBarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {name: "Products", window: ActiveWindow.Products},
    {name: "Clients", window: ActiveWindow.Clients},
    {name: "Orders", window: ActiveWindow.Orders}
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <img src="https://utfs.io/f/a47bcfcf-7caa-4cfa-b744-314e69a9e702-ojmlqz.png" alt="ACME" className="w-8 h-8 rounded-3xl" />
          <p className="font-bold text-inherit">FastFood</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link color={NavBarProps.ActiveWindows === ActiveWindow.Products ? "primary" : "foreground"} href="#" onClick={() => NavBarProps.SetActiveWindow(ActiveWindow.Products)}>
            Products
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color={NavBarProps.ActiveWindows === ActiveWindow.Clients ? "primary" : "foreground"}href="#" aria-current="page" onClick={() => NavBarProps.SetActiveWindow(ActiveWindow.Clients)}>
            Clients
          </Link>
        </NavbarItem>
        <NavbarItem isActive> 
          <Link color={NavBarProps.ActiveWindows === ActiveWindow.Orders ? "primary" : "foreground"} href="#"onClick={() => NavBarProps.SetActiveWindow(ActiveWindow.Orders)} >
            Orders
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <UserButton/>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                NavBarProps.ActiveWindows === item.window ? "primary" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
              onClick={() => NavBarProps.SetActiveWindow(item.window)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
