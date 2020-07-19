import { Component, OnInit } from '@angular/core';
import {Produit} from '../Model/produit';
import {ProduitServiceService} from '../service/produit-service.service';

@Component({
  selector: 'app-liste-product-comp',
  templateUrl: './liste-product-comp.component.html',
  styleUrls: ['./liste-product-comp.component.css']
})
export class ListeProductCompComponent implements OnInit {

    searchText;
    Produits: any = [];
    constructor(private produitService: ProduitServiceService) { }
  ngOnInit() {
      this.loadProducts();
  }
    // Get products lists
    loadProducts() {
        return this.produitService.getProducts().subscribe((data: {}) => {
            this.Produits = data;
        });
    }

    deleteProduit(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.produitService.deleteProduct(id).subscribe(data => {
                this.loadProducts();
            });
        }
    }

}
