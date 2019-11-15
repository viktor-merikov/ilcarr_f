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
    {path: 'search', label: 'Search'},
    {path: 'car/upload', label: 'Let the car work'},
    {path: 'termsofuse', label: 'Terms of use'},
    {path: 'signup', label: 'Sign up'},
    {path: 'login', label: 'Log in'}
  ];

  navLinksActivUser: NavLink[] = [
    {path: 'search', label: 'Search'},
    {path: 'car/upload', label: 'Let the car work'},
    {path: 'termsofuse', label: 'Terms of use'},
    {path: 'login', label: 'Cabinet'}
  ];

  topCities: string[] = ['Jerusalem', 'Tel Aviv', 'Haifa', 'Ashdod', 'Ashkelon', 'Beer Sheva', 'Netanya', 'Akko', 'Patah Tikwa', 'Herzliya'];

  constructor() {
  }

  ngOnInit() {

  }

  userIsLogged() {
    return localStorage.getItem('activeAppUser') ? true : false;
  }
}

