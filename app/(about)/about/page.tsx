"use client";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useMembers } from "./_hooks/useMembers";
import { useTeamName } from "./_hooks/useTeamName";
import { usePasswordModal } from "./_hooks/usePasswordModal";
import { MemberCard, TeamHeader, PasswordModal } from "./_components";

export default function AboutPage() {
  const { members, loadingIndex, updateMember, fetchMembers, saveMember } =
    useMembers();

  const teamNameHook = useTeamName();
  const {
    teamName,
    teamNameDraft,
    editingTeam,
    savingTeam,
    fetchTeamName,
    saveTeamName,
    startEditing,
    cancelEditing,
    updateDraft,
  } = teamNameHook;

  const { modalState, openModal, closeModal, handleVerify } = usePasswordModal({
    onMemberEdit: (index) => updateMember(index, { editing: true }),
    onTeamEdit: startEditing,
  });

  useEffect(() => {
    fetchMembers();
    fetchTeamName();
  }, [fetchMembers, fetchTeamName]);

  const handleEditMemberClick = (index: number, currentEditing: boolean) => {
    if (currentEditing) {
      updateMember(index, { editing: false });
    } else {
      openModal("member", index);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />

      <PasswordModal
        isOpen={modalState.isOpen}
        purpose={modalState.purpose}
        onClose={closeModal}
        onVerify={handleVerify}
        error={modalState.error}
      />

      <div className="min-h-screen w-full text-gray-800 flex items-center justify-center p-0 sm:p-4 md:p-10">
        <div className="w-full max-w-6xl bg-white rounded-none sm:rounded-2xl shadow-lg overflow-hidden">
          <TeamHeader
            teamName={teamName}
            teamNameDraft={teamNameDraft}
            editing={editingTeam}
            saving={savingTeam}
            onEditClick={() => openModal("teamName")}
            updateDraft={updateDraft}
            saveTeamName={() => saveTeamName(members)}
            cancelEditing={cancelEditing}
          />

          <div className="p-8 flex flex-wrap justify-center gap-6">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                member={member}
                index={index}
                isLoading={loadingIndex === index}
                onUpdate={updateMember}
                onSave={saveMember}
                onEditToggle={handleEditMemberClick}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
