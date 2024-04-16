'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button } from "@nextui-org/react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
    { name: "Blog", route: "/blog" },
    { name: "Research", route: "/research" },
    { name: "Researcher Dashboard", route: "/researcher-dashboard" },
    { name: "Help & Feedback", route: "/help-feedback" },
  ];

  return (
    <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary-300 dark:text-dark-primary-300"
        />
        <NavbarBrand>
          <Link href='/' className="font-bold text-2xl text-inherit text-text-50 dark:text-dark-text-50" href="/">
            Martin's Roost
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="text-text-50 dark:text-dark-text-50 text-lg" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/blog" className="text-text-50 dark:text-dark-text-50 text-lg">
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text-50 dark:text-dark-text-50 text-lg" href="/research">
            Research
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Button as={Link} href="/researcher-dashboard" variant="flat" className="bg-secondary-800 dark:bg-dark-secondary-800 text-lg">
            Researcher Dashboard
          </Button>
        </NavbarItem>
      </NavbarContent>
      {/*This line has to be fixed as the navbar does not properly change background even if on a different mode*/}
      <NavbarMenu className=" bg-background-950 dark:bg-dark-background-950">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full text-text-50 dark:text-dark-text-50 text-lg"
              href={item.route}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
