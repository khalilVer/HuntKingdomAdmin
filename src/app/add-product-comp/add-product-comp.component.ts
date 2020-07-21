import {Component, Input, OnInit} from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-product-comp',
  templateUrl: './add-product-comp.component.html',
  styleUrls: ['./add-product-comp.component.css']
})
export class AddProductCompComponent implements OnInit {

     date: Date = new Date();
     dateProduit = this.date.getDate() + ' / ' + (this.date.getMonth() + 1) + ' / ' + this.date.getFullYear();
     productDetails = { reference: '', libelle: '', date: this.dateProduit, prix: 0, categorie: '', description: '', image: '', type: '' }

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
