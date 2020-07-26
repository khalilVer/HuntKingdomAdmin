import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';
import { notification } from '../Model/notification';
import { Thread } from '../Model/thread';

@Component({
  selector: 'app-overwatch-section-comp',
  templateUrl: './overwatch-section-comp.component.html',
  styleUrls: ['./overwatch-section-comp.component.css']
})
export class OverwatchSectionCompComponent implements OnInit {

  Subjects: any = [];
  viewedComment: any = {};
  viewedThread: any = {};

  constructor(private threadService: ThreadServiceService) { }

  ngOnInit() {
    this.loadSubjects();
  }

  // Get threads list
  loadSubjects() {
    return this.threadService.getSubjects().subscribe((data: {}) => {
      this.Subjects = data;
    });
  }

  ignoreSubject(id) {
    if (window.confirm('Are you sure, you want to ignore this Report ?')) {
      this.threadService.ignoreSubject(id).subscribe(data => {
        this.loadSubjects();
      });
    }
  }

  deleteSubject(id, userid, subjectid) {
    var reason: string;
    if (reason = window.prompt("Are you sure you want to delete this Subject ?")) {

      let notif: notification = new notification();
      notif.userid = userid;
      notif.content = "Your posted Subject " + subjectid + " has been reported and banned due to the following reason: " + reason;
      notif.date = new Date().toString();
      this.threadService.createNotif(notif).subscribe();
      this.threadService.deleteSubject(id).subscribe(data => {
        this.loadSubjects();
      });
    }

  }
  viewSubject(subjid, type) {

    if (type == "Thread") {
      this.threadService.getThread(subjid).subscribe((data: {}) => {
        this.viewedThread = data;
        console.log(this.viewedThread);
        this.viewedComment = {};
      });
      
    }
    else {
      this.threadService.getComment(subjid).subscribe((data: {}) => {
        this.viewedComment = data;
        console.log(this.viewedComment);
        this.viewedThread = {};
      });
     
    }
  }

}
