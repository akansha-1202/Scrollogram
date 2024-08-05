"use client"

import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import Link from 'next/link';
import React from 'react'
import { Clapperboard, Compass, Heart, MessageCircle, PlusSquare } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    href: "/dashboard",
    icon: GoHomeFill,
    className: "bg-white-300",
  },
  {
    name: "Search",
    href: "/dashboard/search",
    icon: FiSearch,
    hideOnMobile: true,
  },
  { name: "Explore", href: "/dashboard/explore", icon: Compass },
  {
    name: "Reels",
    href: "/dashboard/reels",
    icon: Clapperboard,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: MessageCircle,
  },
  {
    name: "Notifications",
    href: "/dashboard/notifications",
    icon: Heart,
    hideOnMobile: true,
  },
  {
    name: "Create",
    href: "/dashboard/create",
    icon: PlusSquare,
  },
  {
    name: "Profile",
    href: "/dashboard/profile",
    icon: CgProfile,
  },
];
export default function NavBar() {
  return (
    <div className="w-full md:h-26 flex justify-evenly md:flex-col md:items-center gap-4">
      {links.map((link) => {

        const pathName = usePathname();
        const isActive = pathName === link.href;
        return(
        <Link
          key={link.name}
          href={link.href}
          //   className={`${
          //     link.hideOnMobile ? "hidden md:block" : "block"
          //   } p-2  md:p-3 md:mt-1 flex xl:w-full items-end`}
          className={cn(
            buttonVariants({ variant: isActive ? "secondary" : "ghost" }),
            "p-2 flex xl:w-full items-end",
            link.hideOnMobile ? "hidden md:block" : "block"
          )}
          
        >
          <div className="flex gap-4 items-center ">
            <link.icon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ease-in-out hover:scale-110" />
            <p className={`hidden xl:block ${ isActive ? "font-extrabold" : "font-light"}`}>{link.name}</p>
          </div>
        </Link>)
})}
    </div>
  );
}
