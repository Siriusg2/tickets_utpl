import { create } from "zustand";
import { Ticket } from "@/types";

interface AppStore {
  tickets: Ticket[];

  setTickets: (tickets: []) => void;
}
const useStore = create<AppStore>((set) => ({}));
