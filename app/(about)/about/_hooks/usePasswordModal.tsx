"use client";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import type { ModalPurpose } from "../_types/member";
import { EDIT_PASSWORD, LEADER_PASSWORD } from "../_utils/contans";

type UsePasswordModalProps = {
  onMemberEdit: (index: number) => void;
  onTeamEdit: () => void;
};

export function usePasswordModal({
  onMemberEdit,
  onTeamEdit,
}: UsePasswordModalProps) {
  const [modalState, setModalState] = useState({
    isOpen: false,
    purpose: "member" as ModalPurpose,
    index: null as number | null,
    error: "",
  });

  const openModal = useCallback(
    (purpose: ModalPurpose, index?: number) => {
      setModalState({
        isOpen: true,
        purpose,
        index: index ?? null,
        error: "",
      });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
      error: "",
    }));
  }, []);

  const handleVerify = useCallback(
    (password: string) => {
      const targetPw =
        modalState.purpose === "teamName" ? LEADER_PASSWORD : EDIT_PASSWORD;

      if (password === targetPw) {
        if (modalState.purpose === "member" && modalState.index !== null) {
          onMemberEdit(modalState.index);
          toast.success("Mode edit aktif!");
        } else if (modalState.purpose === "teamName") {
          onTeamEdit();
          toast.success("Silakan ubah nama tim.");
        }
        closeModal();
      } else {
        const label =
          modalState.purpose === "teamName" ? "Password ketua" : "Password";
        setModalState((prev) => ({
          ...prev,
          error: `${label} salah, coba lagi.`,
        }));
        toast.error(`${label} salah!`);
      }
    },
    [modalState, onMemberEdit, onTeamEdit, closeModal]
  );

  return {
    modalState,
    openModal,
    closeModal,
    handleVerify,
  };
}