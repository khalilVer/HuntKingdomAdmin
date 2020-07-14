import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';

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

deleteThread(id) {
    if (window.confirm('Are you sure, you want to reject this thread?')) {
        this.threadService.deleteThread(id).subscribe(data => {
            this.loadThreadsToValidate();
        });
    }
}

validateThread(id) {
  if (window.confirm('Are you sure, you want to validate this thread?')) {
    this.threadService.validateThread(id).subscribe(data => {
        this.loadThreadsToValidate();
    });
}
}


}
