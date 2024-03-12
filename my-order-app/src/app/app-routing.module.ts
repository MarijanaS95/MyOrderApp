import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';

// definisanje niza ruta
//Kreira se niz ruta (Routes) koji definišu kako će se navigacija ponašati. U ovom slučaju, postavljene su dve rute.
//Prva ruta odgovara osnovnom (početnom) putanji i usmerava na komponentu MainComponent kada je ta ruta aktivna.
//Druga ruta odgovara putanji 'cart' i usmerava na komponentu CartComponent kada je ta ruta aktivna.

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'cart', component: CartComponent },
];
// Modul koristi RouterModule za rutiranje i konfiguriše rute definisane u prethodnom koraku.
// Niz sadrži RouterModule, što znači da će se RouterModule koristiti izvan ovog modula (npr. u glavnom AppModule-u).
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//AppRoutingModule modul se izvodi kako bi se mogao koristiti u drugim delovima aplikacije.


