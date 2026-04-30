"use client";

type Props = {
  teamName: string;
  editing: boolean;
  saving: boolean;
  teamNameDraft: string;
  onEditClick: () => void;
  updateDraft: (value: string) => void;
  saveTeamName: (members: any[]) => void;
  cancelEditing: () => void;
};

export function TeamHeader({
  teamName,
  editing,
  saving,
  teamNameDraft,
  onEditClick,
  updateDraft,
  saveTeamName,
  cancelEditing,
}: Props) {
  return (
    <div className="w-full bg-amber-200 p-6 flex flex-col items-center justify-center gap-1 relative">
      {editing ? (
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full px-4 sm:px-0 sm:max-w-md">
          <input
            type="text"
            value={teamNameDraft}
            onChange={(e) => updateDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") saveTeamName([]);
              if (e.key === "Escape") cancelEditing();
            }}
            className="flex-1 w-full text-lg sm:text-2xl font-bold text-center bg-amber-100 border-b-2 border-amber-500 outline-none rounded px-2 py-2 sm:py-1"
            autoFocus
          />
          <div className="flex gap-2 w-full sm:w-auto">
            <button
              onClick={() => saveTeamName([])}
              disabled={saving || !teamNameDraft.trim()}
              className="flex-1 sm:flex-none px-3 sm:px-4 py-2 sm:py-1.5 bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white text-xs sm:text-sm font-medium rounded-lg transition"
            >
              {saving ? "Menyimpan..." : "Simpan"}
            </button>
            <button
              onClick={cancelEditing}
              className="flex-1 sm:flex-none px-3 py-2 sm:py-1.5 bg-white/60 hover:bg-white text-gray-700 text-xs sm:text-sm rounded-lg transition"
            >
              Batal
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="text-xs text-amber-700/60 tracking-wide">
            dibuat oleh:
          </p>
          <h1 className="text-3xl font-bold text-center px-10">{teamName}</h1>
          <button
            onClick={onEditClick}
            title="Ganti nama tim (khusus ketua)"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-amber-100 border border-amber-300 text-amber-700/70 hover:bg-amber-300 hover:text-amber-900 shadow-sm transition text-base"
          >
            ✏️
          </button>
        </>
      )}
    </div>
  );
}