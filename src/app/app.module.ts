import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import { provideStorage, getStorage } from "@angular/fire/storage"
import initializeApp = firebase.initializeApp;
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    AppComponent
  ]
})
export class AppModule { }
