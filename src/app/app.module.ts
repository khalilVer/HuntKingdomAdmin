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
import { ListCategorieComponent } from './categorieEvent/list-categorie/list-categorie.component';
import { AddCategorieComponent } from './categorieEvent/add-categorie/add-categorie.component';
import { ScheduleModule, RecurrenceEditorModule,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { AddEventComponent } from './categorieEvent/add-event/add-event.component';
import { ListEventComponent } from './categorieEvent/list-event/list-event.component';

const ROUTES: Routes = [
    {path: 'dashbord', component: DashbordComponent},
    {path: 'allProduct', component: ListeProductCompComponent},
    {path: 'addProduct', component: AddProductCompComponent},
    {path: 'editProduct/:id', component: EditProductCompComponent},
    
    {path: 'addCategorie', component: AddCategorieComponent},
    {path: 'allCategorie', component: ListCategorieComponent},

    {path: 'addEvent', component: AddEventComponent},
    {path: 'allEvent', component: ListEventComponent},

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
    ListCategorieComponent,
    AddCategorieComponent,
    AddEventComponent,
    ListEventComponent,
    
  ],
  imports: [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot(ROUTES),
      HttpClientModule,
      ScheduleModule, RecurrenceEditorModule
  ],
  providers: [ProduitServiceService,CategorieService,EventService,DayService,WeekService,WorkWeekService,MonthService,MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
