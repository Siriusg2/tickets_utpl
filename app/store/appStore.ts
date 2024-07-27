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
      description: "A Se rompio algo en un lugar",
      createdAt: 20 ,
      status_id: 1,
      period_id: 1,
      nomenclature_id: 1,
      priority: {
        priority_id: 1,
        name: 'Alta'
      },
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
      ticket_id: 84,
      nomenclature_id: 2,
      priority: {
        priority_id: 2,
        name: 'Baja'
      },  
      description: "B Se rompio algo en un lugar",
      createdAt: 200,
      status_id: 2,
      period_id: 2,
      user_id: 2,
      user: {
        user_id: 2,
        username: "Abe45@gmail.com",
        token: 'string'
      },
      status: {
        status_id:2,
        name:"Cerrado",
      },
      nomenclature: {
        nomenclature_id: 2,
        name: 'Ampliación de fecha para postular a beca',
      },
      period: {
        period_id: 1,
        name: 'Period',
      },
    },
    {
      ticket_id: 8,
      nomenclature_id: 3,
      priority: {
        priority_id: 3,
        name: 'Media'
      },       
      status: {
        status_id:3,
        name:"Cerrado",
      },      
      nomenclature: {
        nomenclature_id: 3,
        name: 'Ampliación de fecha para postular a beca',
      },
      description: "C Se rompio algo en un lugar",
      createdAt: 3,
      status_id: 3,
      period_id: 3,
      user: {
        user_id: 3,
        username: "Monserrat44@gmail.com",
        token: 'string'
      },
      period: {
        period_id: 3,
        name: 'Period',
      },
      user_id:3,
    },
    {
      ticket_id: 42,
      nomenclature_id: 4,
      priority: {
        priority_id: 4,
        name: 'Alta'
      },  
      description: "D Se rompio algo en un lugar",
      createdAt: 72,
      status_id: 4,
      period_id: 4,
      user_id: 4,
      nomenclature: {
        nomenclature_id: 3,
        name: 'No se puede realizar orden de pago',
      },
      user: {
        user_id: 3,
        username: "Silas22@gmail.com",
        token: 'string'
      },
      status: {
        status_id:4,
        name:"Pendiente",
      }, 
      period: {
        period_id: 4,
        name: 'Period',
      },
    },
  ],
  setTickets: tickets => set({tickets}),
  }));

export default useStore;