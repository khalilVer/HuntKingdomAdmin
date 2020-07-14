import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events : any = [];
  constructor(private eventService: EventService) { }
ngOnInit() {
    this.loadEvents();
}
  // Get products list
  loadEvents() {
      return this.eventService.getEvents().subscribe((data: Event[]) => {
       
          this.events = data;
          console.log('*********************');
          console.log(this.events);
      });
  }

  deleteEvent(id) {
     if (window.confirm('Are you sure, you want to delete?')) {
          this.eventService.deleteEvent(id).subscribe(data => {
              this.loadEvents();
          });
      }
  }

}
