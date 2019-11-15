import {Injectable} from '@angular/core';
import {CarServiceAbstract} from './cars-service-abstract';
import {BookedPeriod, Car} from './car-interfaces';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const serverURL = environment.serverURL;

@Injectable({
  providedIn: 'root'
})

export class CarsService implements CarServiceAbstract {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + localStorage.getItem('TOKEN')
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  addCar(car: Car): Promise<Car> {
    return this.httpClient.post<Car>(serverURL + '/car', car, this.httpOptions).toPromise();
  }

  updateCar(car: Car): Promise<Car> {
    return this.httpClient.put<Car>(serverURL + `/car?serial_number=${car.serial_number}`, car, this.httpOptions).toPromise();
  }

  deleteCar(serialNumber: string): Promise<void> {
    return this.httpClient.delete<void>(serverURL + `/car?serial_number=${serialNumber}`, this.httpOptions).toPromise();
  }

  getCarByID(serialNumber: string): Promise<Car> {
    return this.httpClient.get<Car>(serverURL + `/car?serial_number=${serialNumber}`).toPromise();
  }

  ownerGetCars(): Promise<Car[]> {
    return this.httpClient.get<Car[]>(serverURL + '/user/cars', this.httpOptions).toPromise();
  }

  ownerGetCarById(serialNumber: string): Promise<Car> {
    return this.httpClient.get<Car>(`${serverURL}/user/cars/car?serial_number=${serialNumber}`, this.httpOptions).toPromise();
  }

  getBookedPeriods(serialNumber: string): Promise<BookedPeriod[]> {
    return this.httpClient.get<BookedPeriod[]>(`${serverURL}/user/cars/periods?serial_number=${serialNumber}`, this.httpOptions).toPromise();
  }

  bestBooked3Cars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${serverURL}/car/best`);
  }

}
