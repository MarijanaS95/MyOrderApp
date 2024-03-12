import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from './cart/cart.component';
import {MainComponent} from './main/main.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MenuItemComponent } from './cart-item/menu-item.component';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';


import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarRow, MatToolbarModule, MatToolbar} from '@angular/material/toolbar';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  
  declarations: [
    AppComponent,
    CartComponent,
    MainComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    HttpClientModule,
    MatButtonModule, 
    MatIconModule, 
    MatListModule, 
    MatTabsModule, 
    MatCardModule,
    MatFormFieldModule, 
    MatSnackBarModule,
    MatToolbarModule,
    TextFieldModule,
    MatGridListModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}

//KORENI MODUL
// Ovde se vrši uvoz, deklaracija i konfiguracija različitih delova aplikacije, uključujući komponente, 
//servisi, rutiranje i druge module.