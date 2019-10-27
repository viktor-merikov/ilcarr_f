import {BookedPeriod, Car} from './car-interfaces';

export abstract class CarServiceAbstract {

  abstract addCar(car: Car): Promise<Car>;

  abstract updateCar(car: Car): Promise<Car>;

  abstract deleteCar(): Promise<void>;

  abstract getCarByID(endpoint: string, serialNumber: string): Promise<Car>;

  abstract getBookedPeriods(serialNumber: string): Promise<BookedPeriod[]>;
}
