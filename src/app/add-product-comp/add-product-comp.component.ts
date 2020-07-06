import {Component, Input, OnInit} from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product-comp',
  templateUrl: './add-product-comp.component.html',
  styleUrls: ['./add-product-comp.component.css']
})
export class AddProductCompComponent implements OnInit {

     productDetails = { reference: '', libelle: '', date: '', prix: 0, categorie: '', description: '', image: '', type: '', quantite: 0 }

    constructor(private produitService: ProduitServiceService, public router: Router
    ) { }

  ngOnInit() {
  }

    addProduit() {
        this.produitService.createProduct(this.productDetails).subscribe((data: {}) => {
            this.router.navigate(['/allProduct']);
        });
    }
}
