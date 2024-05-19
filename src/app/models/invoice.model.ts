export interface Invoice {
  id?: string;
  commerce: string;
  concept: string;
  expenseType: string;
  date: string;
  quantity: number;
  paymentType: string;
  cif: string;
  description: string;
  user_id: number
}
