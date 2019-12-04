import {Injectable, OnInit} from '@angular/core';
import {Car, SearchCarParams} from '../car-interfaces';
import {FiltersService} from './filters.service';

@Injectable({
  providedIn: 'root'
})

export class CarSearchService {
  private carsArray: Car[];
  private defaultSearchFilter: SearchCarParams = {
    city: '',
    start_date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    end_date: new Date().toISOString().slice(0, 16).replace('T', ' '),
    min_amount: 0,
    max_amount: 500,
    ascending: true,
    items_on_page: 20,
    current_page: 0
  };

  constructor(private filtersService: FiltersService) {
    filtersService.searchCar(this.defaultSearchFilter).subscribe(res => {
      this.carsArray = res.cars;
    });
  }

  getFilteredCars(): Car[] {
    return this.carsArray;
  }


}

