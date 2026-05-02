"use client";
import React, { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    nama: "",
    umur: "",
    gender: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Data Profil:", form);
    alert(`Nama: ${form.nama}\nUmur: ${form.umur}\nGender: ${form.gender}`);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="relative w-full max-w-md bg-[#fffdd0] border border-black sm:rounded-2xl shadow-lg p-6 md:p-8 text-white overflow-hidden">
        <span className="absolute top-0 left-0 h-2 w-full border-b border-black bg-[linear-gradient(to_right,#f15b5b_0%,#195B94_30%,#008087_65%,#F2FF00_100%)] sm:rounded-full"></span>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Form Skrining Profil
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
          {/* Nama */}
          <div>
            <label className="block">Nama</label>
            <input
              type="text"
              name="nama"
              value={form.nama}
              onChange={handleChange}
              placeholder="Masukkan nama"
              className="w-full p-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          {/* Umur */}
          <div>
            <label className="block">Umur</label>
            <input
              type="number"
              name="umur"
              value={form.umur}
              onChange={handleChange}
              placeholder="Masukkan umur"
              className="w-full p-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="relative">
            Jenis Kelamin
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 pr-10 rounded-lg appearance-none border border-gray-400"
              required
            >
              <option className="bg-[#fffdd0]" value="">
                Pilih
              </option>
              <option className="bg-[#fffdd0]" value="Laki-laki">
                Laki-laki
              </option>
              <option className="bg-[#fffdd0]" value="Perempuan">
                Perempuan
              </option>
            </select>

            {/* Custom Arrow */}
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 9l6 6 6-6"
                />
              </svg>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 animate-[heartbeat_2s_ease-in-out_infinite] mt-1 text-black font-semibold py-2 rounded-lg border border-black hover:scale-105 hover:font-bold transition duration-300 ease-in-out"
          >
            Lanjut
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
