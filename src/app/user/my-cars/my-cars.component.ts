import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../cars/services/cars.service';
import {Car} from '../../cars/car-interfaces';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.css']
})

export class MyCarsComponent implements OnInit {

  private myCars: Car[];

  constructor(private carService: CarsService) {

  }

  ngOnInit() {
    this.carService.ownerGetCars().then(cars => {
      this.myCars = cars;
    });
  }


  delete(serialNumber: string) {
    // TODO
    // this.carService.deleteCar(serialNumber).then(() => {
    //   alert(`Car ${serialNumber} deleted successfully`);
    // });
  }

  editCar(serialNumber: string) {
    // TODO
  }
}
