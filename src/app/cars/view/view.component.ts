import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  latitude = 34.852029119708504;
  longitude = 32.32252211970851;

  constructor() {
  }

  ngOnInit() {
  }

  onChoseLocation(event) {
    // this.latitude = event.coords.lat;
    // this.longitude = event.coords.lng;
  }
}
