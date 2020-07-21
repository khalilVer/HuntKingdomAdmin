import { Component, OnInit } from '@angular/core';
import {OffreService} from '../service/offre.service';
import {Offre} from '../Model/offre';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  Offres: any = [];

  constructor(private offreService: OffreService) { }

  ngOnInit() {
    this.loadOffres();
  }
// Get products lists
  loadOffres() {
    return this.offreService.getOffres().subscribe((data: {}) => {
      this.Offres = data;
    });
  }

  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.offreService.deleteOffre(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }

}
