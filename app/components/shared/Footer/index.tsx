import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bottom-0 w-screen bg-[#0f2f33] text-white/80 py-10 px-6 md:px-16 border-t border-white/10">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* LEFT */}
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-white">Autify</h1>
          <p className="text-sm text-white/60 max-w-xs">
            Platform modern untuk belajar, bermain, dan meningkatkan produktivitas digital.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-white font-semibold">Navigasi</h2>
          <Link href="/screening" className="hover:text-white transition cursor-pointer">Skrining</Link>
          <Link href="/about" className="hover:text-white transition cursor-pointer">Tentang Kami</Link>
          <Link href="/guide" className="hover:text-white transition cursor-pointer">Panduan Orang Tua</Link>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-2 text-sm">
          <h2 className="text-white font-semibold">Kontak</h2>
          <p>Email: akunakfrontendbaru@gmail.com</p>
          <p>Indonesia</p>
          <p>STEKOM University</p>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="mt-10 border-t border-white/10 pt-4 text-center text-md text-white/40">
        © {new Date().getFullYear()} Autify. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;