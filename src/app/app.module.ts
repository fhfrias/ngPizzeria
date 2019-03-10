import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListaPizzaComponent } from './lista-pizza/lista-pizza.component';
import { AltaPizzaComponent } from './alta-pizza/alta-pizza.component';
import { EliminarPizzaComponent } from './eliminar-pizza/eliminar-pizza.component';
import { UpdatePizzaComponent } from './update-pizza/update-pizza.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListaPizzaComponent,
    AltaPizzaComponent,
    EliminarPizzaComponent,
    UpdatePizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
