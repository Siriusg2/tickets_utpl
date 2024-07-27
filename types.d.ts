export interface Ticket {
  ticket_id: number;
  description: string;
  assets_url_1?: string | null;
  assets_url_2?: string | null;
  assets_url_3?: string | null;
  user_id: number;
  nomenclature_id: number;
  period_id: number;
  createdAt: number;
  status_id: number;
  user: User;
  nomenclature: Nomenclature;
  period: Period;
  status: Status;
  priority: Priority
}

// Asumimos que las interfaces User, Nomenclature, Period y Status ya están definidas.
export interface User {
  user_id: number;
  username: string;
  token: string;
  // Otras propiedades de User...
}
export interface Priority {
  priority_id: number;
  name: string;
}
export interface Nomenclature {
  nomenclature_id: number;
  name: string;
}

export interface Period {
  period_id: number;
  name: string;
  // Otras propiedades de Period...
}

export interface Status {
  status_id: number;
  name: string;
  // Otras propiedades de Status...
}

export interface Statuses  {
  value: string
  label: string
}

