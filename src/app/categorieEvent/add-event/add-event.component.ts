import { CategorieService } from './../../service/categorie.service';
import { Router } from '@angular/router';
import { EventService } from './../../service/event.service';

import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventDetails = { nom: '', adresse: '',date_debut:'',date_fin:'',nbr_participent:''}

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

        this.router.navigate(['/allEvent']);
    });
}

}
