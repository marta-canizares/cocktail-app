import { Component, OnInit } from '@angular/core';
import { IFilter } from '../../interfaces/ifilter';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../models/cocktail.model';

@Component({
  selector: 'app-list-cocktails',
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.css']
})
export class ListCocktailsComponent implements OnInit {

  // abributos
  public showFilter: boolean;
  public listCocktails: Cocktail[];
  public loadCocktails: boolean;
  public filter: IFilter;

  // paginacion
  public items: number;
  public page: number;

  constructor(private cocktailService: CocktailService) {

    this.showFilter = false;
    this.listCocktails = [];
    this.filter = {
      searchBy: 'name',
      value: ''
    };
    this.loadCocktails = true;
    
 
    this.items = 12;
    this.page = 1;

  }

  ngOnInit(): void {
  }


  hideShowFilter(): any {
    this.showFilter = !this.showFilter;
  }


  filterData() {

    this.loadCocktails = false;

    this.cocktailService.getCocktailsFilter(this.filter).subscribe(cocktails => {
      console.log(cocktails)
      this.listCocktails = cocktails;
      this.loadCocktails = true; 
    })
  }

}
