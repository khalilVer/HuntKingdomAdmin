import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';
import { Thread } from '../Model/thread';
import { notification } from '../Model/notification';

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

  deleteThread(id,userid) {
    var reason: string ;
    if (reason = window.prompt('Are you sure, you want to delete? Please enters the reason to notifty the creator of this thread')) {
      const notif : notification = {id : null, userid , content : reason, date : new Date().toString()};
      this.threadService.createNotif(notif);
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
