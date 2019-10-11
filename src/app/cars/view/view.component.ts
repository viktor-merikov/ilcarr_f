import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  latitude = 32.2970637;
  longitude = 34.85437006;

  constructor() {
  }

  ngOnInit() {
  }

  onChoseLocation(event) {
    // this.latitude = event.coords.lat;
    // this.longitude = event.coords.lng;
  }
}
