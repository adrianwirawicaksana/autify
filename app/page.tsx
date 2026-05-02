"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleClick = () => {
    const audio = new Audio("/sounds/Hey.mp3");
    audio.play();
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center px-6 sm:px-8 md:px-12 py-12">
        <div className="relative overflow-hidden card-shine animate-[heartbeat_2s_ease-in-out_infinite] bg-[#f15b5b] border-6 border-[#d94c4c] w-full max-w-lg rounded-4xl transition duration-300 hover:scale-110 cursor-pointer">
          <Image
            src="/images/Bird.webp"
            alt="Gambar Burung"
            width={500}
            height={500}
            className="object-contain w-full h-auto relative z-10"
            onClick={handleClick}
            priority
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-screen flex items-center justify-center px-8 py-12">
        <div className="flex flex-col items-center gap-6 text-center max-w-md w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl animate-[bounce-soft_3s_ease-in-out_infinite] font-bold text-white">
            Autify App
          </h1>
          <p className="text-white/70 text-base md:text-xl animate-[pulse-text_2.5s_ease-in-out_infinite]">
            Mari tumbuh bersama Autify.
          </p>
          <Link href="/screening/form">
            <button className="w-full sm:w-auto relative overflow-hidden card-shine bg-[#195B94] hover:bg-[#124e82] border-3 border-[#124e82] text-white px-8 py-3 rounded-xl shadow-lg transition animate-[breathe_2s_ease-in-out_infinite] cursor-pointer">
              Mulai Skrining
            </button>
          </Link>
          <Link href="/dashboard">
            <button className="w-full sm:w-auto relative overflow-hidden card-shine bg-[#195B94] hover:bg-[#124e82] border-3 border-[#124e82] text-white px-8 py-3 rounded-xl shadow-lg transition animate-[breathe_2s_ease-in-out_infinite] cursor-pointer">
              Lihat Dashboard
            </button>
          </Link>
          <Link href="/study">
            <button className="w-full sm:w-auto relative overflow-hidden card-shine bg-[#195B94] hover:bg-[#124e82] border-3 border-[#124e82] text-white px-8 py-3 rounded-xl shadow-lg transition animate-[breathe_2s_ease-in-out_infinite] cursor-pointer">
              Mulai Belajar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
