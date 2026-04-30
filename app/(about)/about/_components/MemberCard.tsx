"use client";

import toast from "react-hot-toast";
import type { Member } from "../_types/member";
import { formatLink, getUsername } from "../_utils/formatters";
import { AvatarAnimationStyles } from "./AvatarAnimationStyles";
import { VipBadge } from "./VipBadge";

type Props = {
  member: Member;
  index: number;
  isLoading: boolean;
  onUpdate: (index: number, data: Partial<Member>) => void;
  onSave: (member: Member, index: number) => void;
  onEditToggle: (index: number, currentEditing: boolean) => void;
};

const isBackendAi = (role: string) => role === "Backend Ai";

export function MemberCard({
  member,
  index,
  isLoading,
  onUpdate,
  onSave,
  onEditToggle,
}: Props) {
  const handleImage = (file?: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onUpdate(index, { photo: reader.result as string });
      toast.success("Foto berhasil dipilih!");
    };
    reader.onerror = () => toast.error("Gagal membaca file gambar.");
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[18%] bg-amber-50 rounded-xl p-5 flex flex-col items-center text-center shadow relative overflow-hidden">
      <button
        onClick={() => onEditToggle(index, member.editing)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black transition"
        title={member.editing ? "Tutup Edit" : "Edit Member"}
      >
        {member.editing ? "❌" : "✏️"}
      </button>

      <div className="relative mb-3">
        {isBackendAi(member.role) && <AvatarAnimationStyles />}

        {isBackendAi(member.role) ? (
          <div className="avatar-rgb-wrap">
            <VipBadge />
            <div className="avatar-rgb-inner bg-amber-900 flex items-center justify-center text-white text-4xl font-bold">
              {member.photo ? (
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                member.name.charAt(0)
              )}
            </div>
          </div>
        ) : (
          <div className="w-35 h-35 bg-amber-900 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden text-white text-4xl font-bold">
            {member.photo ? (
              <img
                src={member.photo}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            ) : (
              member.name.charAt(0)
            )}
          </div>
        )}

        {member.editing && (
          <label className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow cursor-pointer text-xs z-10">
            🖼️
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleImage(e.target.files?.[0])}
            />
          </label>
        )}
      </div>

      {member.editing ? (
        <input
          value={member.name}
          onChange={(e) => onUpdate(index, { name: e.target.value })}
          className="text-center font-bold border-b bg-transparent outline-none"
        />
      ) : (
        <h2 className="font-bold">{member.name}</h2>
      )}

      {member.editing ? (
        <input
          value={member.role}
          onChange={(e) => onUpdate(index, { role: e.target.value })}
          className="text-sm text-gray-600 border-b bg-transparent text-center outline-none"
        />
      ) : (
        <p className="text-sm text-gray-600">{member.role}</p>
      )}

      {member.editing ? (
        <input
          value={member.social}
          onChange={(e) => onUpdate(index, { social: e.target.value })}
          className="text-sm text-amber-600 border-b bg-transparent text-center outline-none"
        />
      ) : (
        <a
          href={formatLink(member.social)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-amber-600 hover:underline"
        >
          {getUsername(member.social)}
        </a>
      )}

      <button
        onClick={() => onUpdate(index, { show: !member.show })}
        className="mt-3 text-md px-6 py-1 bg-amber-400 text-white rounded-full"
      >
        {member.show ? "Sembunyikan" : "Lihat"}
      </button>

      {member.show &&
        (member.editing ? (
          <textarea
            value={member.desc}
            onChange={(e) => onUpdate(index, { desc: e.target.value })}
            placeholder="Tulis deskripsi anggota..."
            className="text-sm mt-3 w-full border rounded p-2"
          />
        ) : (
          <p className="text-sm mt-3">
            {member.desc || "Belum ada deskripsi."}
          </p>
        ))}

      {member.editing && (
        <button
          onClick={() => onSave(member, index)}
          disabled={isLoading}
          className="mt-4 w-full bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white py-2 rounded-lg font-medium transition"
        >
          {isLoading ? "Mengirim..." : "Kirim ke Server"}
        </button>
      )}
    </div>
  );
}