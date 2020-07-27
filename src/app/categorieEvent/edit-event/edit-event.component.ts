import { CategorieService } from './../../service/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  
  categoriesList = [];
  
  id = this.actRoute.snapshot.params['id'];
  eventData: any = {};
constructor(private cagtegoryService: CategorieService,private eventService: EventService, public router: Router, public actRoute: ActivatedRoute,private toastr: ToastrService) { }

ngOnInit() {
    this.cagtegoryService.getCategories().subscribe(data => {
      this.categoriesList = data;
      console.log('categorie', this.eventData.categorie);
      this.eventService.getEvent(this.id).subscribe((data) => {
          this.eventData = data;
          this.eventData.categorie = this.categoriesList.find(category => {
            console.log('Category', category, this.eventData.categorie);
            return category.id == this.eventData.categorie.id;
          })
      });
})}

  updateEvent() {
    
      if (window.confirm('Are you sure, you want to update?')) {

        this.eventData.date_debut = moment(this.eventData.date_debut).format('Y-MM-DD hh:mm:ss');
        this.eventData.date_fin = moment(this.eventData.date_fin).format('Y-MM-DD hh:mm:ss');
        
          this.eventService.updateEvent(this.id, this.eventData).subscribe(data => {
           this.toastr.success('The Event is  successfully modified', 'Thank You!');
            
              this.router.navigate(['/allEvent']);
          });
      }
  }

}
