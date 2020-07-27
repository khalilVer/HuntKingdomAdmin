import { EventService } from './../../service/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {

  events : any = [];
  originalEvents: any = [];
  search: string;
  constructor(private eventService: EventService,private toastr: ToastrService) { }
ngOnInit() {
    this.loadEvents();
}
  // Get products list
  loadEvents() {
      return this.eventService.getEvents().subscribe((data: Event[]) => {
       
          this.events = data;
          this.originalEvents = data;
          console.log('*********************');
          console.log(this.events);
      });
  }

  searchEvent() {
    console.log('ori', this.originalEvents);
    console.log('ori1', this.events);
    console.log('ori2',  this.search);

    if (!this.search) {
      console.log('this.Search', this.search, this.originalEvents);
      this.events = this.originalEvents;
    }
    this.events = this.events.filter(event => {
      return event.nom.indexOf(this.search) >= 0;
    })
  }

  deleteEvent(id) {
     if (window.confirm('Are you sure, you want to delete?')) {
          this.eventService.deleteEvent(id).subscribe(data => {
              this.loadEvents();
      this.toastr.success('The Event is successfully Deleted');

          });
      }
  }

}
