import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8yq3hTHPM-a7qxrw8FRm6ISqSl6qhnaw",
  authDomain: "gasto-gestion.firebaseapp.com",
  projectId: "gasto-gestion",
  storageBucket: "gasto-gestion.appspot.com",
  messagingSenderId: "728351854859",
  appId: "1:728351854859:web:f3a3e2838a734d459b120e"
};

const app = initializeApp(firebaseConfig);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
