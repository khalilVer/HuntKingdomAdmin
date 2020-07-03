import { Component, OnInit } from '@angular/core';
import {CommandeServiceService} from '../service/commande-service.service';

@Component({
  selector: 'app-liste-commande-comp',
  templateUrl: './liste-commande-comp.component.html',
  styleUrls: ['./liste-commande-comp.component.css']
})
export class ListeCommandeCompComponent implements OnInit {

    commandes: any = [];
    constructor(private commandeService: CommandeServiceService) { }
    ngOnInit() {
        this.loadCommandes();
    }
    // Get commandes list
    loadCommandes() {
        return this.commandeService.getCommandes().subscribe((data: {}) => {
            this.commandes = data;
        });
    }

    deleteCommande(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.commandeService.deleteCommande(id).subscribe(data => {
                this.loadCommandes();
            });
        }
    }

    validateCommande(id) {
        if (window.confirm('Are you sure, you want to validate?')) {
            this.commandeService.validateCommande(id).subscribe(data => {
                this.loadCommandes();
            });
        }
    }

}
