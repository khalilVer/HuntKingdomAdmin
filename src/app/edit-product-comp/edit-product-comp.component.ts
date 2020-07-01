import { Component, OnInit } from '@angular/core';
import {ProduitServiceService} from '../service/produit-service.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product-comp',
  templateUrl: './edit-product-comp.component.html',
  styleUrls: ['./edit-product-comp.component.css']
})
export class EditProductCompComponent implements OnInit {

    id = this.actRoute.snapshot.params['id'];
    productData: any = {};
  constructor(private produitService: ProduitServiceService, public router: Router, public actRoute: ActivatedRoute) { }

  ngOnInit() {
      this.produitService.getProduct(this.id).subscribe((data: {}) => {
          this.productData = data;
      });
  }

    updateProduit() {
        if (window.confirm('Are you sure, you want to update?')) {
            this.produitService.updateProduct(this.id, this.productData).subscribe(data => {
                this.router.navigate(['/allProduct']);
            });
        }
    }
}
