import { Component, OnInit } from '@angular/core';
import {OffreService} from '../service/offre.service';
import {Buy} from '../Model/buy';
import {BuyService} from '../service/buy.service';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  Offres: any = [];

  constructor(private offreService: BuyService) { }

  ngOnInit() {
    this.loadOffres();
  }
// Get products lists
  loadOffres() {
    return this.offreService.getProducts().subscribe((data: {}) => {
      this.Offres = data;
    });
  }

  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.offreService.deleteProduct(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }
}
