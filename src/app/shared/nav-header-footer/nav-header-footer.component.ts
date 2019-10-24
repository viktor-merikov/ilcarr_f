import {Component, OnInit} from '@angular/core';
import {NavLink} from '../nav-link.interface';

@Component({
  selector: 'app-nav-header-footer',
  templateUrl: './nav-header-footer.component.html',
  styleUrls: ['./nav-header-footer.component.css']
})

export class NavHeaderFooterComponent implements OnInit {
  logoLink: NavLink = {path: 'main', label: 'Main'};

  navLinks: NavLink[] = [
    {path: 'car/search', label: 'Search'},
    {path: 'car/upload', label: 'Let the car work'},
    {path: 'termsofuse', label: 'Terms of use'},
    {path: 'signup', label: 'Sign up'},
    {path: 'login', label: 'Log in'}
  ];

  topCities: string[] = ['New York', 'Tokyo', 'Paris', 'London', 'Los Angeles', 'Vienna', 'Moscow', 'Warsaw', 'Berlin', 'Seattle'];

  constructor() {
  }

  ngOnInit() {
  }

}
