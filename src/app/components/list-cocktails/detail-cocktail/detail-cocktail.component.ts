import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../services/cocktail.service';
import { Cocktail } from '../../../models/cocktail.model';

@Component({
  selector: 'app-detail-cocktail',
  templateUrl: './detail-cocktail.component.html',
  styleUrls: ['./detail-cocktail.component.css']
})
export class DetailCocktailComponent implements OnInit {

  public cocktail: Cocktail;
  public loadCocktail: boolean;

  constructor
    (private cocktailService: CocktailService,
    private route: ActivatedRoute)
  {
      this.cocktail = null;
    
       }


  ngOnInit() {

  this.route.params.subscribe(params => {
    let id = params['id'];
    this.cocktailService.getCocktailById(id).subscribe(c => {
      this.cocktail = c;
      console.log(this.cocktail);
      this.loadCocktail = true;
    }, error =>{
      console.error(error);
    })
  }, error =>{
    console.error(error);
  })
  }
  
}
