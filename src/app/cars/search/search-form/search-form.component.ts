import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarSearchService} from '../../services/car-search.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  private minPrice = 50;
  private maxPrice = 500;
  private searchParam: string;
  private from: any;
  private till: any;
  private city: string;

  constructor(private activateRoute: ActivatedRoute, private carSearchService: CarSearchService) {
  }

  ngOnInit() {
    this.searchParam = this.activateRoute.snapshot.fragment;
    if (!this.searchParam) {
      this.from = this.till = new Date();
      this.city = 'Tel Aviv';
    } else {
      this.city = this.searchParam.split(',')[0];
      this.from = this.searchParam.split(',')[1];
      this.till = this.searchParam.split(',')[2];
    }
  }

  // Data from slider
  onSliderChange(selectedNumbers: number[]) {
    this.minPrice = selectedNumbers[0];
    this.maxPrice = selectedNumbers[1];
  }

  // Sorting by price
  sortListCars(typeSort: string) {
    if (typeSort === 'highToLow') {
      this.carSearchService.getFilteredCars().sort((a, b) => {
        return a.price_per_day === b.price_per_day ? a.price_per_day - b.price_per_day : b.price_per_day - a.price_per_day;
      });
    } else if (typeSort === 'lowToHigh') {
      this.carSearchService.getFilteredCars().sort((a, b) => {
        return a.price_per_day === b.price_per_day ? b.price_per_day - a.price_per_day : a.price_per_day - b.price_per_day;
      });
    }
  }
}
