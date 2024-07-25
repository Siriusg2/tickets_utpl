import { create } from "zustand";
import { Ticket } from "@/types";

interface AppStore {
  tickets: Ticket[];
  setTickets: (tickets: Ticket[]) => void;
}

const useStore = create<AppStore>((set, get) => ({
  tickets: [
    {
      ticket_id: 849,
      prioridad: 'Alta',
      description: "A Se rompio algo en un lugar",
      createdAt: 20 ,
      status_id: 1,
      period_id: 1,
      nomenclature_id: 1,
      // user: "ken99@yahoo.com",
      user_id: 1,
      user: {
        user_id: 1,
        username: "ken99@yahoo.com",
        token: 'string'
      },
      status: {
        status_id:1,
        name:"Escalado",
      },
      nomenclature: {
        nomenclature_id: 1,
        name: 'No recibe correo para reiniciar la contraseña',
      },
      period: {
        period_id: 1,
        name: 'Period',
      },
    },
    {
      ticket_id: "3u1reuv4",
      prioridad: 'Baja',
      status: "Cerrado",
      asunto: "Ampliación de fecha para postular a beca",
      description: "B Se rompio algo en un lugar",
      createdAt: '1 mes',
      status_id: 2,
      period_id: 2,
      user: "Abe45@gmail.com",
      user_id: 2,
    },
    {
      ticket_id: "derv1ws0",
      prioridad: 'Media',
      status: "Cerrado",
      asunto: "Ampliación de fecha para postular a beca",
      description: "C Se rompio algo en un lugar",
      createdAt: "3 horas",
      status_id: 3,
      period_id: 3,
      user: "Monserrat44@gmail.com",
      user_id:3,
    },
    {
      ticket_id: "5kma53ae",
      prioridad: 'Alta',
      status: "Pendiente",
      asunto: "No se puede realizar orden de pago",
      description: "D Se rompio algo en un lugar",
      createdAt: '3 dias',
      status_id: 4,
      period_id: 4,
      user: "Silas22@gmail.com",
      user_id: 4,
    },
    {
      ticket_id: "bhqecj4p",
      prioridad: 'Alta',
      status: "En proceso",
      asunto: "No recibe correo para reiniciar la contraseña",
      description: "E Se rompio algo en un lugar",
      createdAt: '1 semana',
      status_id: 5,
      period_id: 5,
      user: "carmella@hotmail.com",
      user_id: 5,
    },
  ],
  setTickets: ticket => set({ticket})
}));