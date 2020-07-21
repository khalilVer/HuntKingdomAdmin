import { Component, OnInit } from '@angular/core';
import {DemandeService} from '../service/demande.service';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  Demandes: any = [];

  constructor(private demandeService: DemandeService) { }

  ngOnInit() {
    this.loadOffres();
  }
// Get products lists
  loadOffres() {
    return this.demandeService.getDemandes().subscribe((data: {}) => {
      this.Demandes = data;
    });
  }

  deleteOffre(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.demandeService.deleteDemande(id).subscribe(data => {
        this.loadOffres();
      });
    }
  }

}
