import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  priceRange = 50;
  mapActive = false;
  searchActive = true;
  filtersActive = false;
  latitude = 32.2970637;
  longitude = 34.85437006;

  constructor() {
  }

  ngOnInit() {
  }


  mapIsActive() {
    this.searchActive = false;
    this.filtersActive = false;
    this.mapActive = true;
  }

  searchIsActive() {
    this.searchActive = true;
    this.filtersActive = false;
    this.mapActive = false;
  }

  filtersIsActive() {
    this.searchActive = false;
    this.filtersActive = true;
    this.mapActive = false;
  }
}
