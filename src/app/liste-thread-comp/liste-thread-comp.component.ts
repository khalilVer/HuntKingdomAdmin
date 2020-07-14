import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';
import { Thread } from '../Model/thread';

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

  deleteThread(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
        this.threadService.deleteThread(id).subscribe(data => {
            this.loadThreads();
        });
    }
  }

  getRatio(p :Thread) {
    var ratio : number = Math.ceil( Number(p.upvote) / (Number(p.downvote) + Number(p.upvote)) * 100);
    return ratio;
  }

}
