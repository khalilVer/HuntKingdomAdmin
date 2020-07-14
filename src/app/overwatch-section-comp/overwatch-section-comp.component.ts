import { Component, OnInit } from '@angular/core';
import { ThreadServiceService } from '../service/thread-service.service';

@Component({
  selector: 'app-overwatch-section-comp',
  templateUrl: './overwatch-section-comp.component.html',
  styleUrls: ['./overwatch-section-comp.component.css']
})
export class OverwatchSectionCompComponent implements OnInit {

  Subjects: any = [];

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

  deleteSubject(id) {
    if (window.confirm("Are you sure you want to delete this Subject ?")) {
        this.threadService.deleteSubject(id).subscribe(data => {
            this.loadSubjects();
        });
    }
  
  }

}
