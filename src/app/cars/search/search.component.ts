import {Component, OnDestroy, OnInit} from '@angular/core';
import {Car, CarAddress} from '../car-interfaces';
import {CarsService} from '../cars.service';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private minPrice = 50;
  private maxPrice = 500;
  private mapActive = false;
  private searchActive = true;
  private filtersActive = false;
  private carAddress: CarAddress;
  private cars: Car[];
  private searchParam: string;
  private from: any;
  private till: any;
  private city: string;


  constructor(private carService: CarsService, private activateRoute: ActivatedRoute) {
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


    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.carService.bestBooked3Cars().subscribe(cars => this.cars = cars);
    this.carAddress = {latitude: 32.2970637, longitude: 34.85437006, place_id: 'IL'};
  }

  // Which window is active
  private wwIsActive(window: string) {
    if (window === 'filters') {
      this.mapActive = false;
      this.searchActive = false;
      this.filtersActive = true;
    } else if (window === 'map') {
      this.mapActive = true;
      this.searchActive = false;
      this.filtersActive = false;
    } else {
      this.mapActive = false;
      this.searchActive = true;
      this.filtersActive = false;
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
      this.cars.sort((a, b) => {
        return a.price_per_day === b.price_per_day ? a.price_per_day - b.price_per_day : b.price_per_day - a.price_per_day;
      });
    } else if (typeSort === 'lowToHigh') {
      this.cars.sort((a, b) => {
        return a.price_per_day === b.price_per_day ? b.price_per_day - a.price_per_day : a.price_per_day - b.price_per_day;
      });
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

