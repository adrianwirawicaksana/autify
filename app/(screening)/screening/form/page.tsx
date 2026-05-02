"use client";

import Button from "@/app/components/ui/Button";
import Card from "@/app/components/ui/Card";
import { useForm } from "./_hooks/useForm";

const Page = () => {
  const { form, handleChange, handleSubmit } = useForm();

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card>
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Form Skrining Profil
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4 text-gray-800"
        >
          {/* Nama */}
          <div>
            <label className="block">Siapa nama pahlawan kecil anda?</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          {/* Umur */}
          <div>
            <label className="block">Umur</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              min={0}
              max={20}
              className="w-full p-2 rounded-lg border border-gray-400"
              required
            />
          </div>

          {/* Gender */}
          <div>
            <label>Jenis Kelamin</label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="w-full p-2 rounded-lg border border-gray-400"
              required
            >
              <option value="">Pilih</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>

          <Button>Lanjut Kuis</Button>
        </form>
      </Card>
    </div>
  );
};

export default Page;
