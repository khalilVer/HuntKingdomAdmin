import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';
import { notification } from '../Model/notification';

@Component({
  selector: 'app-validate-thread-comp',
  templateUrl: './validate-thread-comp.component.html',
  styleUrls: ['./validate-thread-comp.component.css']
})
export class ValidateThreadCompComponent implements OnInit {

  Threads: any = [];

  constructor(private threadService: ThreadServiceService) { }

  ngOnInit() {
    this.loadThreadsToValidate();
  }

  // Get threads to validate
  loadThreadsToValidate() {
    return this.threadService.getThreadsToValidate().subscribe((data: {}) => {
        this.Threads = data;
    });
  }

deleteThread(id,userid,title) {
  var reason: string ;
    if (reason = window.prompt('Are you sure, you want to reject this thread?')) {
      let notif: notification = new notification();
      notif.userid = userid;
      notif.content = "Your pending thread "+title+" has been rejected due to the following reason: " +reason;
      notif.date = new Date().toString();


        this.threadService.createNotif(notif).subscribe();
        this.threadService.deleteThread(id).subscribe(data => {
            this.loadThreadsToValidate();
        });
    }
}

validateThread(id,usercreator,title) {
  if (window.confirm('Are you sure, you want to validate this thread?')) {

    let notif: notification = new notification();
    notif.userid = usercreator;
    notif.content = "Your pending thread "+title+" has been validated.";
    notif.date = new Date().toString();
    console.log(notif);

    this.threadService.createNotif(notif).subscribe();
    this.threadService.validateThread(id).subscribe(data => {
        this.loadThreadsToValidate();
    });
}
}


}
