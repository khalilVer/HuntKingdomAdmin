import { CategorieService } from './../../service/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  
  categoriesList = [];
  
  id = this.actRoute.snapshot.params['id'];
  eventData: any = {};
constructor(private cagtegoryService: CategorieService,private eventService: EventService, public router: Router, public actRoute: ActivatedRoute) { }

ngOnInit() {
    this.eventService.getEvent(this.id).subscribe((data: {}) => {
        this.eventData = data;
    });
    this.cagtegoryService.getCategories().subscribe(data => {
      this.categoriesList = data;
})}

  updateEvent() {
    
      if (window.confirm('Are you sure, you want to update?')) {
          this.eventService.updateEvent(this.id, this.eventData).subscribe(data => {
              this.router.navigate(['/allEvent']);
          });
      }
  }

}
