import { Categorie } from './../../Model/categorie';
import { CategorieService } from './../../service/categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  categories : any = [];
   constructor(private categorieService: CategorieService) { }
  ngOnInit() {
      this.loadCategorie ();
  }
    // Get products list
    loadCategorie() {
        return this.categorieService.getCategories().subscribe((data: {}) => {
            this.categories = data;
        });
    }

    deleteCategor(id) {
       if (window.confirm('Are you sure, you want to delete?')) {
            this.categorieService.deleteCategorie(id).subscribe(data => {
                this.loadCategorie();

            });
        }
    }

}
