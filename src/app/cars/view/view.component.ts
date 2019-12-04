import {Component, OnInit} from '@angular/core';
import {CarsService} from '../services/cars.service';
import {Car} from '../car-interfaces';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ActivatedRoute} from '@angular/router';

const GET_ADDRESS = 'https://maps.googleapis.com/maps/api/place/details/json';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  private toDay: Date;
  private carNumber: string;
  private carAddress: string;
  private car: Car;

  constructor(private carsService: CarsService, private httpClient: HttpClient, private activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.carNumber = this.activateRoute.snapshot.fragment;
    this.toDay = new Date();
    this.carsService.getCarByID(this.carNumber).then(req => {
      this.car = req as Car;
    });
    // this.httpClient.get(`${GET_ADDRESS}?placeid=${this.car.pick_up_place.place_id}&key=${environment.googleMapApiKey}`).subscribe(data => {
    //   // this.carAddress = data.formatted_address;
    //   console.log(data);
    // });
  }
}
