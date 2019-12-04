import {Component, OnInit} from '@angular/core';
import {Car, CarAddress} from '../../car-interfaces';
import {CarsService} from '../../services/cars.service';
import {CarSearchService} from '../../services/car-search.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private carAddress: CarAddress;
  carsCoordinates: {
    lat: number;
    lng: number;
  }[] = [];

  constructor(private carSearchService: CarSearchService) {
  }

  ngOnInit() {
    this.carAddress = {latitude: 32.2970637, longitude: 34.85437006, place_id: 'IL'};
    this.carSearchService.getFilteredCars().forEach(car => {
      this.carsCoordinates.push({lat: car.pick_up_place.latitude, lng: car.pick_up_place.longitude});
    });
  }

}
