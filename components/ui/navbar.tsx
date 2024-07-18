"use client";

import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isProfessionalMode, setIsProfessionalMode] = useState(true);

  const handleProfessionalModeChange = () => {
    setIsProfessionalMode(!isProfessionalMode);
    };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 w-full z-50 transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="flex justify-center items-center pt-4">
        <NavigationMenu className="bg-white p-2 shadow-lg rounded-full">
          <NavigationMenuList className="flex space-x-1">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-full">
                Item One
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-1 rounded shadow">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} p-2 rounded`}>
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="rounded-full">
                Item Two
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-1 rounded shadow">
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-gray-200 p-2 rounded`}>
                  Link
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex items-center space-x-2">
              <Switch id="professional-mode" defaultChecked={isProfessionalMode} onCheckedChange={handleProfessionalModeChange} />
              <Label htmlFor="professional-mode" className="min-w-28 inline-block text-center">{isProfessionalMode ? "Professional" : "Personal"}</Label>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
