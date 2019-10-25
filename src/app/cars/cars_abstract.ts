import {User} from '../user/user_abstract';

export interface Car {
  pick_up_place: Address;
  serial_number: string;
  make: string;
  year: string;
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
  image_url: string[];
}

export interface Address {
  country: string;
  region: string;
  city: string;
  street: string;
  apartment: string;
  zip: number;
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

export interface CarCoord {
  latitude: number;
  longitude: number;
}


export abstract class CarServiceAbstract {

  abstract addCar(car: Car): Promise<Car>;

  abstract updateCar(car: Car): Promise<Car>;

  abstract deleteCar(): Promise<void>;

  abstract getCarByID(endpoint: string, serialNumber: string): Promise<Car>;

  abstract getBookedPeriods(serialNumber: string): Promise<BookedPeriod[]>;
}
