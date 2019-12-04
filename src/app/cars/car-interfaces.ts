import {User} from '../user/services/user_abstract';

export interface Car {
  serial_number: string;
  make: string;
  model: string;
  year: number;
  engine: string;
  fuel: string;
  gear: string;
  wheels_drive: string;
  doors: number;
  seats: number;
  fuel_consumption: number;
  features: string[];
  car_class: string;
  price_per_day: number;
  distance_included: number;
  about: string;
  pick_up_place: CarAddress;
  image_url: string[];
  owner?: User;
  booked_periods?: BookedPeriod[];
}

export interface CarAddress {
  place_id: string;
  latitude: number;
  longitude: number;
}


export interface BookedPeriod {
  start_date_time: string;
  end_date_time: string;
  order_id: string;
  paid: boolean;
  amount: number;
  booking_date: string;
  person_who_booked: User;
}

export interface ImageCar {
  url: string;
  public_id: string;
}

export interface Paginator {
  current_page: number;
  items_on_page: number;
  items_total: number;
  cars: Car[];
  filter: Filter;
}

export interface Filter {
  make: string;
  models: [{
    model: string;
    years: [{
      year: string;
      engines: [{
        engine: string;
        fuels: [{
          fuel: string;
          gears: [{
            gear: string;
            wheels_drives: [{
              wheels_drive: string;
            }]
          }]
        }]
      }]
    }]
  }];
}

export interface SearchCarParams {
  city: string;
  start_date: string;
  end_date: string;
  min_amount: number;
  max_amount: number;
  ascending: boolean;
  items_on_page: number;
  current_page: number;
}
