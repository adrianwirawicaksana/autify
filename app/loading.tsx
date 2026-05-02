import Image from "next/image";

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#0f2f33]">
      
      <div className="flex flex-col items-center gap-6">
        
        {/* LOGO ANIMATION */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-2xl animate-pulse" />

          {/* Logo */}
          <div className="relative animate-bounce">
            <Image
              src="/icons/Autify.svg"
              alt="Autify Logo"
              width={120}
              height={120}
              className="drop-shadow-xl"
            />
          </div>
        </div>

        {/* TEXT */}
        <p className="text-white/80 text-lg tracking-wide animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}