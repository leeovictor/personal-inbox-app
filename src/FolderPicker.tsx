import React from "react";
import { open } from "@tauri-apps/plugin-dialog";

interface FolderPickerProps {
  onSelect: (folderPath: string | null) => void;
  label?: string;
}

export const FolderPicker: React.FC<FolderPickerProps> = ({ onSelect, label }) => {
  const handlePick = async () => {
    const selected = await open({
      directory: true,
      multiple: false,
    });
    if (typeof selected === "string" || selected === null) {
      onSelect(selected);
    }
  };

  return (
    <button
      type="button"
      onClick={handlePick}
      className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:bg-indigo-700 transition-colors duration-150 cursor-pointer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
        <path d="M2 6a2 2 0 0 1 2-2h5l2 2h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Z" />
      </svg>
      {label || "Selecionar Pasta"}
    </button>
  );
};
