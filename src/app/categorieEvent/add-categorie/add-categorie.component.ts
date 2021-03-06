import { CategorieService } from './../../service/categorie.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  categorietDetails = { nom: '', description: '' }

  constructor(private categorieService: CategorieService, public router: Router) { }

ngOnInit() {
}

  addCategori() {
      this.categorieService.createCategorie(this.categorietDetails).subscribe((data: {}) => {
          this.router.navigate(['/allCategorie']);
      });
  }

}
