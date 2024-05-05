import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Invoice} from "./models/invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private firestore: Firestore) { }

  getUserInvoices(id: string): Observable<Invoice[]>{
    const invoicesRef = collection(this.firestore, `/users/${id}/invoices`);
    return collectionData(invoicesRef, {idField: 'id'}) as Observable<Invoice[]>;
  }

  addInvoice(userId: string, invoice: Invoice){
    const invoicesRef = collection(this.firestore, `/users/${userId}/invoices`);
    return addDoc(invoicesRef, invoice);
  }

  updateUserInvoice(userId: string, invoice: Invoice) {
    const invoicesRef = doc(this.firestore, `/users/${userId}/invoices/${invoice.id}`);
    return setDoc(invoicesRef, invoice);
  }

  deleteInvoice(userId: string, invoiceId: string) {
    const invoicesRef = doc(this.firestore, `/users/${userId}/invoices/${invoiceId}`);
    return deleteDoc(invoicesRef);
  }
}
