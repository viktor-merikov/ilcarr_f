import {Component, OnInit} from '@angular/core';

export interface CarCoord {
  latitude: number;
  longitude: number;
}


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
  carPoint: CarCoord = {latitude: 32.2970637, longitude: 34.85437006};

  constructor() {
  }

  ngOnInit() {
  }

  // What window is active
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
}

