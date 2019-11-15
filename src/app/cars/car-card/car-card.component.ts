import {Component, Input, OnInit} from '@angular/core';
import {Car} from '../car-interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car: Car;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onCarView() {
    this.router.navigate(['/view'], {fragment: this.car.serial_number}).then();
  }
}
