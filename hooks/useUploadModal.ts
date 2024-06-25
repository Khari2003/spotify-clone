import { create } from "zustand";

interface UploadModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useUploadModal = create<UploadModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}))

export default useUploadModal;