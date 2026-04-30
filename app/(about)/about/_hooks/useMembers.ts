"use client";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import type { Member } from "../_types/member";
import { defaultMembers, CACHE_KEY } from "../_utils/contans";

export function useMembers() {
  const [members, setMembers] = useState<Member[]>(defaultMembers);
  const [loadingIndex, setLoadingIndex] = useState<number | null>(null);

  const updateMember = useCallback((index: number, data: Partial<Member>) => {
    setMembers((prev) =>
      prev.map((m, i) => (i === index ? { ...m, ...data } : m)),
    );
  }, []);

  const mergeWithInitial = useCallback((apiData: any[]): Member[] => {
    return defaultMembers.map((def, i) => {
      const fromApi = apiData.find((m: any) => m.slotIndex === i);
      if (!fromApi) return def;
      return {
        ...def,
        name: fromApi.name || def.name,
        role: fromApi.role || def.role,
        social: fromApi.social || def.social,
        desc: fromApi.desc || def.desc,
        photo: fromApi.photo || def.photo,
      };
    });
  }, []);

  const fetchMembers = useCallback(async () => {
    try {
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const { data } = JSON.parse(cached);
        setMembers(mergeWithInitial(data));
      }

      const res = await fetch("/api/members");
      if (!res.ok) throw new Error("Gagal fetch");
      const result = await res.json();
      if (!result.success) throw new Error("Data tidak valid");

      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: result.data }));
      setMembers(mergeWithInitial(result.data));
    } catch (err) {
      console.error(err);
      if (!localStorage.getItem(CACHE_KEY)) {
        setMembers(defaultMembers);
      }
    }
  }, [mergeWithInitial]);

  const saveMember = useCallback(
    async (member: Member, index: number) => {
      const toastId = toast.loading(`Menyimpan data ${member.name}...`);
      try {
        setLoadingIndex(index);
        const response = await fetch("/api/members", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            slotIndex: index,
            name: member.name,
            role: member.role,
            social: member.social,
            desc: member.desc,
            photo: member.photo,
          }),
        });

        if (!response.ok) throw new Error("Gagal menyimpan");
        const result = await response.json();

        localStorage.removeItem(CACHE_KEY);
        toast.success(`${member.name} berhasil diperbarui!`, { id: toastId });
        updateMember(index, { editing: false });
      } catch (error) {
        console.error("Error saving member:", error);
        toast.error(`Gagal mengirim data ${member.name}`, { id: toastId });
      } finally {
        setLoadingIndex(null);
      }
    },
    [updateMember],
  );

  return {
    members,
    loadingIndex,
    updateMember,
    fetchMembers,
    saveMember,
  };
}
