import { Component, OnInit } from '@angular/core';
import {BuyService} from '../service/buy.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-buy',
  templateUrl: './edit-buy.component.html',
  styleUrls: ['./edit-buy.component.css']
})
export class EditBuyComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  details: any = {};
  constructor(private produitService: BuyService, public router: Router, public actRoute: ActivatedRoute) { }
  ngOnInit() {
    this.produitService.getProduct(this.id).subscribe((data: {}) => {
      this.details = data;
    });
  }

  updateOffre() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.produitService.updateProduct(this.id, this.details).subscribe(data => {
        this.router.navigate(['/allOffre']);
      });
    }
  }
}
