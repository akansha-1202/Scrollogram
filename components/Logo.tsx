import Link from 'next/link'
import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { buttonVariants } from './ui/button';
import { styleScriptFont } from '@/app/font';

function Logo() {
  return (
    <Link
      href={"/dashboard"}
      className={buttonVariants({
        variant: "ghost",
        className: " hidden md:block mt-2",
      })}
    >
      <FaInstagram className="hidden md:block xl:hidden w-7 h-7 shrink-0 transition-transform duration-300 ease-in-out hover:scale-110 -ml-1" />
      <p
        className="text-3xl hidden xl:block font-medium"
        style={{ fontFamily: styleScriptFont.style.fontFamily }}
      >
        Scrollogram
      </p>
    </Link>
  );
}

export default Logo
