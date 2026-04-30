"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 h-16 z-50 flex items-center justify-between px-6 md:px-8 bg-[#0f2f33] text-white">
      
      {/* LEFT */}
      <Link href="/" className="flex items-center gap-2 font-medium">
        <Image src="/icons/Autify.svg" alt="Ikon Autify" width={40} height={40} />
        <div>Autify</div>
      </Link>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-6 text-sm text-white/90">
        <Link href="/screening" className="hover:text-white transition hover:underline">
          Skrining
        </Link>
        <Link href="/about" className="hover:text-white transition hover:underline">
          Tentang Kami
        </Link>
        <Link href="/guide" className="hover:text-white transition hover:underline">
          Panduan Orang Tua
        </Link>
      </div>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* MOBILE MENU (SMOOTH) */}
      <div
        className={`
          absolute top-16 left-0 w-full bg-[#0f2f33]
          flex flex-col items-start gap-4 px-6 py-6 md:hidden
          border-t border-white/10

          transition-all duration-300 ease-in-out
          ${open 
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
          }
        `}
      >
        <Link href="/screening" onClick={() => setOpen(false)}>
          Skrining
        </Link>
        <Link href="/about" onClick={() => setOpen(false)}>
          Tentang Kami
        </Link>
        <Link href="/guide" onClick={() => setOpen(false)}>
          Panduan Orang Tua
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;