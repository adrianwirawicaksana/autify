"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import type { ModalPurpose } from "../_types/member";

type Props = {
  isOpen: boolean;
  purpose: ModalPurpose;
  onClose: () => void;
  onVerify: (password: string) => void;
  error?: string;
};

export function PasswordModal({
  isOpen,
  purpose,
  onClose,
  onVerify,
  error,
}: Props) {
  const [pwInput, setPwInput] = useState("");
  const [showPw, setShowPw] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onVerify(pwInput);
    setPwInput("");
  };

  return (
    <div className="fixed inset-0 bg-black/50 text-gray-800 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 shadow-xl w-80 flex flex-col gap-4">
        <h2 className="text-lg font-bold text-gray-800 text-center">
          {purpose === "teamName" ? "🔒 Edit Nama Tim" : "🔒 Verifikasi Password"}
        </h2>
        {purpose === "teamName" && (
          <p className="text-sm text-gray-500 text-center -mt-2">
            Hanya ketua tim yang bisa mengubah nama tim.
          </p>
        )}
        <div className="relative">
          <input
            type={showPw ? "text" : "password"}
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            placeholder={
              purpose === "teamName" ? "Password ketua..." : "Password edit..."
            }
            className="w-full border rounded-lg px-4 py-2 pr-10 outline-none focus:ring-2 focus:ring-amber-400"
            autoFocus
          />
          <button
            type="button"
            onClick={() => setShowPw((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-gray-600 transition"
            tabIndex={-1}
          >
            {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition"
          >
            Batal
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 py-2 rounded-lg bg-amber-400 text-white font-medium hover:bg-amber-500 transition"
          >
            Verifikasi
          </button>
        </div>
      </div>
    </div>
  );
}