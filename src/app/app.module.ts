import { EventService } from './service/event.service';
import { CategorieService } from './service/categorie.service';
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
import { ListeCommandeCompComponent } from './liste-commande-comp/liste-commande-comp.component';
import { ListeThreadCompComponent } from './liste-thread-comp/liste-thread-comp.component';
import { ValidateThreadCompComponent } from './validate-thread-comp/validate-thread-comp.component';
import { OverwatchSectionCompComponent } from './overwatch-section-comp/overwatch-section-comp.component';
import { ListCategorieComponent } from './categorieEvent/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './categorieEvent/add-categorie/add-categorie.component';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { AddEventComponent } from './categorieEvent/add-event/add-event.component';
import { ListEventComponent } from './categorieEvent/list-event/list-event.component';
import { EditEventComponent } from './categorieEvent/edit-event/edit-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OffreComponent } from './offre/offre.component';
import { DemandeComponent } from './demande/demande.component';
import {OffreService} from './service/offre.service';
import {DemandeService} from './service/demande.service';


import { EditCategorieComponent } from './categorieEvent/edit-categorie/edit-categorie.component';

const ROUTES: Routes = [
    {path: 'dashbord', component: DashbordComponent},
    {path: 'allProduct', component: ListeProductCompComponent},
    {path: 'addProduct', component: AddProductCompComponent},
    {path: 'editProduct/:id', component: EditProductCompComponent},
    {path: 'allCommande', component: ListeCommandeCompComponent},
    {path: 'allThreads', component: ListeThreadCompComponent},
    {path: 'validateThreads', component: ValidateThreadCompComponent},
    {path: 'overwatchsection', component: OverwatchSectionCompComponent},
    {path: 'addCategorie', component: AddCategorieComponent},
    {path: 'allCategorie', component: ListCategorieComponent},
    {path: 'addEvent', component: AddEventComponent},
    {path: 'allEvent', component: ListEventComponent},
    {path: 'editEvent/:id', component: EditEventComponent},
    {path: 'offre', component: OffreComponent},
    {path: 'demande', component: DemandeComponent},

    {path: 'editCategorie/:id', component: EditCategorieComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashbordComponent,
    ListeProductCompComponent,
    AddProductCompComponent,
    EditProductCompComponent,
    ListeCommandeCompComponent,
    ListeThreadCompComponent,
    ValidateThreadCompComponent,
    OverwatchSectionCompComponent,
    ListCategorieComponent,
    AddCategorieComponent,
    AddEventComponent,
    ListEventComponent,
    EditEventComponent,
    EditCategorieComponent,
    OffreComponent,
    DemandeComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES),
      HttpClientModule,
      ReactiveFormsModule,
      Ng2SearchPipeModule
  ],
  providers: [ProduitServiceService, CategorieService, EventService, OffreService, DemandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
