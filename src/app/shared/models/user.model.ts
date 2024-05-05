import {Invoice} from "./invoice.model";

export interface User {
  username: string;
  password: string;
  email: string;
  invoiceList: Invoice[]
}
