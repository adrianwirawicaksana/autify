"use client";

import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen w-full text-gray-800 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-lg overflow-hidden">
        
        {/* Header */}
        <div className="flex flex-col bg-amber-50 md:flex-row items-center justify-center gap-6 p-6 md:p-10 border-b border-gray-200">
          <div className="w-40 md:w-56">
            <Image
              src="/images/Parent.webp"
              alt="Gambar Orang Tua"
              width={200}
              height={200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 text-center md:text-left">
            <h1 className="text-2xl md:text-4xl font-bold">
              Panduan Orang Tua
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-xl">
              Halaman ini membantu orang tua memahami cara mendampingi anak
              dalam proses belajar agar lebih efektif, aman, dan menyenangkan.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 grid gap-6 md:grid-cols-2">
          
          {/* Section 1 */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">
              📚 Dampingi Proses Belajar
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Luangkan waktu untuk menemani anak saat belajar. Berikan motivasi
              dan bantu mereka memahami materi tanpa tekanan berlebihan.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">
              ⏰ Atur Waktu Belajar
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Buat jadwal belajar yang konsisten. Pastikan anak memiliki waktu
              istirahat yang cukup agar tidak merasa jenuh.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">
              💡 Ciptakan Lingkungan Nyaman
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Sediakan tempat belajar yang tenang, terang, dan bebas gangguan
              agar anak dapat fokus belajar dengan maksimal.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gray-100 rounded-xl p-5">
            <h2 className="font-semibold text-lg mb-2">
              🔒 Awasi Penggunaan Teknologi
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pastikan anak menggunakan perangkat digital dengan bijak dan aman.
              Dampingi mereka saat mengakses internet.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 md:px-10 pb-8">
          <div className="bg-blue-50 text-blue-700 p-4 rounded-xl text-sm text-center">
            💬 Tips: Komunikasi yang baik antara orang tua dan anak adalah kunci
            utama keberhasilan belajar.
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;