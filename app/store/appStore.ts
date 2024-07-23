import { create } from "zustand";

interface AppStore {
  tickets: [];
}
const useStore = create<AppStore>((set) => ({}));
