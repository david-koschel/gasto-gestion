import {Invoice} from "./invoice.model";

export interface User {
  id?: number;
  email: string;
  password: string;
  username: string;
}
