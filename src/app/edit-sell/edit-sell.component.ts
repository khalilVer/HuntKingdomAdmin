import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SellService} from '../service/sell.service';

@Component({
  selector: 'app-edit-sell',
  templateUrl: './edit-sell.component.html',
  styleUrls: ['./edit-sell.component.css']
})
export class EditSellComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  details: any = {};
  constructor(private sellService: SellService, public router: Router, public actRoute: ActivatedRoute) { }
  ngOnInit() {
    this.sellService.getProduct(this.id).subscribe((data: {}) => {
      this.details = data;
    });
  }

  updateOffre() {
    if (window.confirm('Are you sure, you want to update?')) {
      this.sellService.updateProduct(this.id, this.details).subscribe(data => {
        this.router.navigate(['/allDemande']);
      });
    }
  }

}
