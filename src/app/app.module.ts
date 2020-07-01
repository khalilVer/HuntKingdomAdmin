import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListeProductCompComponent } from './liste-product-comp/liste-product-comp.component';
import {ProduitServiceService} from './service/produit-service.service';
import { AddProductCompComponent } from './add-product-comp/add-product-comp.component';
import { EditProductCompComponent } from './edit-product-comp/edit-product-comp.component';

const ROUTES: Routes = [
    {path: 'dashbord', component: DashbordComponent},
    {path: 'allProduct', component: ListeProductCompComponent},
    {path: 'addProduct', component: AddProductCompComponent},
    {path: 'editProduct/:id', component: EditProductCompComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    ListeProductCompComponent,
    AddProductCompComponent,
    EditProductCompComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES),
      HttpClientModule
  ],
  providers: [ProduitServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
