import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// firebase 
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// firebase environment
import { environment } from '../environments/environment';


// declaramos novos componentes aqui
/* 

  declarations: armazenam os componentets
  imports: modules
  providers: services
*/

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatIconModule, MatProgressSpinnerModule],
  providers: [provideAnimationsAsync(), provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
