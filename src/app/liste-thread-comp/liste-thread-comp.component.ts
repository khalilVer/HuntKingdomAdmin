import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';

@Component({
  selector: 'app-liste-thread-comp',
  templateUrl: './liste-thread-comp.component.html',
  styleUrls: ['./liste-thread-comp.component.css']
})
export class ListeThreadCompComponent implements OnInit {

  Threads: any = [];

  constructor(private threadService: ThreadServiceService) { }

  ngOnInit() {
    this.loadThreads();
  }

  // Get threads list
  loadThreads() {
    return this.threadService.getThreads().subscribe((data: {}) => {
        this.Threads = data;
    });
  }

deleteProduit(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
        this.threadService.deleteThread(id).subscribe(data => {
            this.loadThreads();
        });
    }
}

}
