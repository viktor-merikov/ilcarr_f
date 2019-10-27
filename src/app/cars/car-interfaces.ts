import {User} from '../user/user_abstract';

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
