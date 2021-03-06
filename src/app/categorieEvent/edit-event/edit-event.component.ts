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
          this.eventService.updateEvent(this.id, this.eventData).subscribe(data => {
              this.router.navigate(['/allEvent']);
          });
      }
  }

}
