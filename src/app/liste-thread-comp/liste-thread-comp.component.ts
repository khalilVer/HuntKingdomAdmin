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

  deleteThread(id,userid,title) {
    var reason: string ;
    if (reason = window.prompt('Are you sure, you want to delete? Please enters the reason to notifty the creator of this thread')) {
     
      let notif: notification = new notification();
      notif.userid = userid;
      notif.content = "Your posted thread "+title+" has been deleted due to the following reason: " +reason;
      notif.date = new Date().toString();
      console.log(notif);

      this.threadService.createNotif(notif).subscribe();
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
