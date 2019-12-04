import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarSearchService} from '../services/car-search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  private mapActive = false;
  private searchActive = true;
  private filtersActive = false;


  constructor(private carSearchService: CarSearchService, private activateRoute: ActivatedRoute, private router: Router) {
  }


  ngOnInit() {
  }

  // Which window is active
  private wwIsActive(window: string) {
    if (window === 'filters') {
      this.mapActive = false;
      this.searchActive = false;
      this.filtersActive = true;
      this.router.navigate(['/search/filters']).then();

    } else if (window === 'map') {
      this.mapActive = true;
      this.searchActive = false;
      this.filtersActive = false;
      this.router.navigate(['/search/map']).then();
    } else {
      this.mapActive = false;
      this.searchActive = true;
      this.filtersActive = false;
      this.router.navigate(['/search']).then();
    }
  }
}

