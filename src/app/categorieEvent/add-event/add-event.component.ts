import { CategorieService } from './../../service/categorie.service';
import { Router } from '@angular/router';
import { EventService } from './../../service/event.service';

import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  eventDetails = { nom: '', adresse: '',date_debut:'',date_fin:'',nbr_participent:'',langitude:'',latitude:''}

  categoriesList = [];

  constructor(private cagtegoryService: CategorieService, private eventService: EventService, public router: Router,private toastr: ToastrService) { }

  ngOnInit() {
    this.cagtegoryService.getCategories().subscribe(data => {
      this.categoriesList = data;
      console.log('categoriesList', this.categoriesList)
    })
  }
  
 
  
  addEvent() {
    this.eventDetails.date_debut = moment(this.eventDetails.date_debut).format('Y-MM-DD hh:mm:ss');
    this.eventDetails.date_fin = moment(this.eventDetails.date_fin).format('Y-MM-DD hh:mm:ss');
    this.eventService.createEvent(this.eventDetails).subscribe((data: {}) => {
      this.toastr.success('The Event is added successfully', 'Thank You!');


        this.router.navigate(['/allEvent']);
    });
}

}
