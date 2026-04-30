"use client";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { TEAM_NAME_KEY, DEFAULT_TEAM_NAME } from "../_utils/contans";

export function useTeamName() {
  const [teamName, setTeamName] = useState(DEFAULT_TEAM_NAME);
  const [teamNameDraft, setTeamNameDraft] = useState(DEFAULT_TEAM_NAME);
  const [editingTeam, setEditingTeam] = useState(false);
  const [savingTeam, setSavingTeam] = useState(false);

  const fetchTeamName = useCallback(async () => {
    try {
      const cached = localStorage.getItem(TEAM_NAME_KEY);
      if (cached) {
        setTeamName(cached);
        setTeamNameDraft(cached);
      }

      const res = await fetch("/api/team-name");
      if (!res.ok) throw new Error();
      const result = await res.json();
      if (result.success && result.data?.name) {
        setTeamName(result.data.name);
        setTeamNameDraft(result.data.name);
        localStorage.setItem(TEAM_NAME_KEY, result.data.name);
      }
    } catch {
      // Fetch gagal → cache masih tampil
    }
  }, []);

  const saveTeamName = useCallback(
    async (currentMembers: any[]) => {
      if (!teamNameDraft.trim()) return;
      setSavingTeam(true);
      const toastId = toast.loading("Menyimpan nama tim...");

      try {
        const response = await fetch("/api/team-name", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: teamNameDraft.trim(),
            updatedBy: currentMembers[0]?.name || "Unknown",
          }),
        });

        if (!response.ok) throw new Error("Gagal menyimpan");

        localStorage.setItem(TEAM_NAME_KEY, teamNameDraft.trim());
        setTeamName(teamNameDraft.trim());
        setEditingTeam(false);
        toast.success("Nama tim berhasil diperbarui!", { id: toastId });
      } catch (err) {
        console.error("Error saving team name:", err);
        toast.error("Gagal menyimpan nama tim", { id: toastId });
      } finally {
        setSavingTeam(false);
      }
    },
    [teamNameDraft],
  );

  const startEditing = useCallback(() => {
    setTeamNameDraft(teamName);
    setEditingTeam(true);
  }, [teamName]);

  const cancelEditing = useCallback(() => {
    setEditingTeam(false);
    setTeamNameDraft(teamName);
  }, [teamName]);

  const updateDraft = useCallback((value: string) => {
    setTeamNameDraft(value);
  }, []);

  return {
    teamName,
    teamNameDraft,
    editingTeam,
    savingTeam,
    fetchTeamName,
    saveTeamName,
    startEditing,
    cancelEditing,
    updateDraft,
  };
}
