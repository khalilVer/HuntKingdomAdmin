import { Component, OnInit } from '@angular/core';
import {Sell} from '../Model/sell';
import {SellService} from '../service/sell.service';


@Component({
  selector: 'app-offre',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  Demandes: any = [];

  constructor(private demandeService: SellService) { }

  ngOnInit() {
    this.loadOffres();
  }
// Get products lists
  loadOffres() {
    return this.demandeService.getProducts().subscribe((data: {}) => {
      this.Demandes = data;
    });
  }

  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.demandeService.deleteProduct(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }
}
