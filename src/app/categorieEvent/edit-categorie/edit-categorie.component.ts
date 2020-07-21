import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CategorieService } from './../../service/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.css']
})
export class EditCategorieComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  categrieData: any = {};
constructor(private categorieService: CategorieService , public router: Router, public actRoute: ActivatedRoute) { }

ngOnInit() {
    this.categorieService.getCategorie(this.id).subscribe((data: {}) => {
        this.categrieData = data;
    });
}

  updateCategorie() {
      if (window.confirm('Are you sure, you want to update?')) {
          this.categorieService.updateCategorie(this.id, this.categrieData).subscribe(data => {
              this.router.navigate(['/allCategorie']);
          });
      }
  }

}
