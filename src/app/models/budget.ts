export interface Budget {
  id?: string;
  client: string;
  date: Date;
  items:BudgetItem[];
  /* TODO
     Add collection to hold data about:
        - zone
        - moduleType reference that has information about (slots, price, type)
  */
}

export enum Zone {
  LIVING = 'Living',
  COMEDOR = 'Comedor',
  KITCHEN = 'Cocina',
  ROOM = 'Dormitorio'
}

export interface ModuleType {
  id: number;
  name: string;
  slots: number;
  price: number;
}

export interface BudgetItem{
  zone:Zone,
  module:ModuleType 
}