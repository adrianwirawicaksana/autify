"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn, isLoaded, user } = useUser();

  const userName = user?.firstName || user?.username || "User";

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0f2f33]/90 backdrop-blur-md border-b border-white/10">
      <div className="h-16 flex items-center justify-between px-6 md:px-10 max-w-7xl mx-auto">
        {/* LEFT */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <Image src="/icons/Autify.svg" alt="Autify" width={36} height={36} />
          <span>Autify</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <Link href="/screening" className="hover:text-white transition">
            Skrining
          </Link>
          <Link href="/about" className="hover:text-white transition">
            Tentang
          </Link>
          <Link href="/guide" className="hover:text-white transition">
            Panduan
          </Link>
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center jus gap-4">
          {!isLoaded ? (
            <div className="w-10 h-10 bg-white/20 rounded-full animate-pulse" />
          ) : isSignedIn ? (
            <div className="flex items-center gap-3">
              {/* 🔥 WRAPPER FIX CENTER */}
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="scale-130 flex items-center hover:scale-140 transition">
                  <UserButton />
                </div>
              </div>

              <span className="text-sm text-white/90 hidden lg:block">
                {userName}
              </span>
            </div>
          ) : (
            <SignInButton mode="modal">
              <button className="px-5 py-2 rounded-xl bg-[#f15b5b] border-3 border-[#d94c4c] text-[#0f2f33] font-semibold hover:bg-[#d94c4c] transition shadow-md">
                Login
              </button>
            </SignInButton>
          )}
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-105 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-6 pb-6 pt-4 bg-[#0f2f33]/95 backdrop-blur-md border-t border-white/10 flex flex-col gap-4">
          <Link href="/screening" onClick={() => setOpen(false)}>
            Skrining
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            Tentang Kami
          </Link>
          <Link href="/guide" onClick={() => setOpen(false)}>
            Panduan Orang Tua
          </Link>

          {/* AUTH */}
          <div className="pt-4 mt-2 border-t border-white/10">
            {!isLoaded ? (
              <div className="w-full h-12 bg-white/10 rounded-xl animate-pulse" />
            ) : isSignedIn ? (
              <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl">
                {/* 🔥 WRAPPER FIX MOBILE */}
                <div className="w-12 h-12 flex items-center justify-center">
                  <div className="scale-150 flex items-center">
                    <UserButton />
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium">{userName}</div>
                  <div className="text-xs text-white/60">Kelola profil</div>
                </div>
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="w-full py-3 rounded-xl bg-[#f15b5b] text-[#0f2f33] font-semibold hover:bg-[#d94c4c] transition shadow-md">
                  Masuk / Daftar
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
