import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from "@angular/common/http";
import {provideFirebaseApp} from "@angular/fire/app";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const firebaseConfig = {
  apiKey: "AIzaSyC8yq3hTHPM-a7qxrw8FRm6ISqSl6qhnaw",
  authDomain: "gasto-gestion.firebaseapp.com",
  databaseURL: "https://gasto-gestion-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gasto-gestion",
  storageBucket: "gasto-gestion.appspot.com",
  messagingSenderId: "728351854859",
  appId: "1:728351854859:web:f3a3e2838a734d459b120e"
};

const app = initializeApp(firebaseConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling(scrollConfig)),
    provideHttpClient(),
    importProvidersFrom([
      provideFirestore(() => getFirestore())
    ])
  ]
};

