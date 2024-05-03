export interface Invoice {
  id?: number;
  cif: string;
  commerce: string;
  concept: string;
  date: Date;
  description: string;
  expenseType: string;
  paymentType: string;
  quantity: number;
  user_id: number
}
