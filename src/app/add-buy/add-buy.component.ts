import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BuyService} from '../service/buy.service';

@Component({
  selector: 'app-add-buy',
  templateUrl: './add-buy.component.html',
  styleUrls: ['./add-buy.component.css']
})
export class AddBuyComponent implements OnInit {

  constructor(private buyService: BuyService, public router: Router) { }
  details = { titre: '', adresse: '', datepublication: '',  categorie: '', description: '' , deadline: '' , etat: ''}

  ngOnInit() {
  }
  addOffre() {
    this.buyService.createOffre(this.details).subscribe((data: {}) => {
      this.router.navigate(['/allOffre']);
    });
  }
}
