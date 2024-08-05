"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { GoMoon } from "react-icons/go";
import { IoIosSettings } from "react-icons/io";
import { LiaBookmarkSolid } from "react-icons/lia";
import { LuActivitySquare } from "react-icons/lu";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";
import { LogOut, Menu } from "lucide-react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";
import { Label } from "./ui/label";

function MoreDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null); // Adjust the type based on the actual element you're using
  const [showModeToggle, setShowModeToggle] = useState(false);
  const { theme, setTheme } = useTheme();
  const menuIcons = [
    {
      name: "Settings",
      icon: IoIosSettings,
    },
    {
      name: "Your activity",
      icon: LuActivitySquare,
    },
    {
      name: "Saved",
      icon: LiaBookmarkSolid,
    },
    {
      name: "Switch appearance",
      icon: GoMoon,
      task: () => setShowModeToggle(!showModeToggle),
    },
    {
      name: "Log out",
      icon: LogOut,
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowModeToggle(false);
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger
        asChild
        className={`w-full flex justify-start pt-0.5 pb-0.5 h-14`}
      >
        <Button
          variant="ghost"
          className="flex items-center gap-4 focus-visible:ring-0 focus-visible:ring-offset-0"
          onClick={() => setOpen(!open)}
        >
          <Menu />
          <div className="hidden xl:block font-light">More</div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 ml-3 pt-0.5 pb-0.5 dark:bg-[#262626] rounded-xl"
        ref={ref}
      >
        {!showModeToggle &&
          menuIcons.map((item) => (
            <DropdownMenuItem
              key={item.name}
              onClick={item.task}
              className="pl-0.5 pr-0.5"
              // className="flex gap-4 p-4 font-light hover:cursor-pointer "
            >
              <div
                className={`flex gap-4 ${
                  theme === "dark" && "hover:bg-[#3C3C3C]"
                } pl-4 pr-4 pt-3.5 pb-3.5 font-light hover:cursor-pointer w-full rounded-lg`}
              >
                <item.icon size={20} />
                <p>{item.name}</p>
              </div>
            </DropdownMenuItem>
          ))}
        {showModeToggle && (
          <>
            <DropdownMenuLabel
              className="pt-3 pb-3 flex justify-between"
              onClick={() => setShowModeToggle(false)}
            >
              <div className="flex gap-2">
                <MdOutlineKeyboardArrowLeft
                  size={20}
                  className="text-[#737373] font-light hover:cursor-pointer"
                />
                Switch appearance
              </div>
              {theme === "dark" ? (
                <GoMoon size={20} />
              ) : (
                <IoSunnyOutline size={20} />
              )}
            </DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#737373]" />

            {/* <Label
              htmlFor="dark-mode"
              className={`flex justify-between gap-4 ${
                theme === "dark" && "hover:bg-[#3C3C3C]"
              } pl-4 pr-4 pt-3.5 pb-3.5 font-light hover:cursor-pointer w-full rounded-lg`}
            > */}

            <DropdownMenuItem
              className="pl-0.5 pr-0.5"
            >
              <Label
                htmlFor="dark-mode"
                className={`flex justify-between gap-4 ${
                  theme === "dark" && "hover:bg-[#3C3C3C]"
                } pl-4 pr-4 pt-3.5 pb-3.5 font-light hover:cursor-pointer w-full rounded-lg`}
              >
                <p>Dark mode</p>
                <Switch
                  id="dark-mode"
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
              </Label>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default MoreDropdown;
