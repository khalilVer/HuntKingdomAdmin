import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  categrieData: any = {};
constructor(private ca: CategorieService , public router: Router, public actRoute: ActivatedRoute) { }

ngOnInit() {
    this.produitService.getProduct(this.id).subscribe((data: {}) => {
        this.categrieData = data;
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
