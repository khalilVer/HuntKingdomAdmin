import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SellService} from '../service/sell.service';

@Component({
  selector: 'app-add-sell',
  templateUrl: './add-sell.component.html',
  styleUrls: ['./add-sell.component.css']
})
export class AddSellComponent implements OnInit {

  constructor(private sellService: SellService, public router: Router) { }
  details = { titre: '', adresse: '', datePublication: '',  categorie: '', description: '' , deadline: '' , etat: ''}

  ngOnInit() {
  }
  addOffre() {
    this.sellService.createOffre(this.details).subscribe((data: {}) => {
      this.router.navigate(['/allDemande']);
    });
  }
}
