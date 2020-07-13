import { CategorieService } from './../../service/categorie.service';
import { Router } from '@angular/router';
import { EventService } from './../../service/event.service';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { DateTimePicker } from '@syncfusion/ej2-calendars';
import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, PopupOpenEventArgs } from '@syncfusion/ej2-angular-schedule';
 
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventDetails = { nom: '', adresse: '',dateDebut:'',dateFin:'',nbrParticipent:''}

  categoriesList = [];

  constructor(private cagtegoryService: CategorieService, private eventService: EventService, public router: Router) { }

  ngOnInit() {
    this.cagtegoryService.getCategories().subscribe(data => {
      this.categoriesList = data;
      console.log('categoriesList', this.categoriesList)
    })
  }
  
 
  
  addCategory() {
    this.eventService.createEvent(this.eventDetails).subscribe((data: {}) => {
        this.router.navigate(['/allCategorie']);
    });
}

}
