import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  toDay: Date;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.toDay = new Date();
  }

  onSearch(location: any, from: any, till: any) {
    // @ts-ignore
    const dataSearch = `${location.value},${from.value},${till.value}`;
    this.router.navigate(['/search'], {fragment: dataSearch}).then();
  }
}
