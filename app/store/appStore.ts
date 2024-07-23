import { Ticket } from "@/types";
import { create } from "zustand";

interface AppStore {
  tickets: Ticket[];
  userData: 

  setTickets: (tickets: []) => void;
}
const useStore = create<AppStore>((set) => ({}));
