import {BookedPeriod, Car, Filter, Paginator, SearchCarParams} from '../car-interfaces';
import {Observable} from 'rxjs';

export abstract class CarAbstract {

  abstract addCar(car: Car): Promise<Car>;

  abstract updateCar(car: Car): Promise<Car>;

  abstract deleteCar(serialNumber: string): Promise<void>;

  abstract getCarByID(serialNumber: string): Promise<Car>;

  abstract getBookedPeriods(serialNumber: string): Promise<BookedPeriod[]>;

  abstract ownerGetCars(): Promise<Car[]>;

  abstract ownerGetCarById(serialNumber: string): Promise<Car>;

  abstract bestBooked3Cars(): Observable<Car[]>;
}

export abstract class FiltersAbstract {

  abstract searchByCoordinates(): Observable<Paginator>;

  abstract searchCar(searchParams: SearchCarParams): Observable<Paginator>;

  abstract searchByFilters(): Observable<Paginator>;

  abstract getFilters(): Promise<Filter>;
}
