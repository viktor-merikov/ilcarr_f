import {Component, OnInit} from '@angular/core';
import {Cloudinary} from '@cloudinary/angular-5.x';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Car, ImageCar} from '../car-interfaces';
import {CarServiceAbstract} from '../cars-service-abstract';
import {error} from 'util';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {
  private options: any;
  private hiddenMarker = true;
  private latitude: number;
  private longitude: number;
  private zoom: number;
  private selectedFile: File = null;
  private uploadedImages: ImageCar[] = [];
  private carInformation: FormGroup;

  constructor(private cloudinary: Cloudinary, private carsService: CarServiceAbstract, private httpClient: HttpClient) {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.latitude = pos.coords.latitude;
      this.longitude = pos.coords.longitude;
      this.zoom = 12.5;
    }, () => {
      this.latitude = 30.8760272;
      this.longitude = 35.0015196;
      this.zoom = 8;
    });

    this.carInformation = new FormGroup({
      serial_number: new FormControl('', [Validators.required, Validators.maxLength(8)]),
      make: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      model: new FormControl('', [Validators.required, Validators.maxLength(16)]),
      year: new FormControl('', [Validators.required, Validators.pattern('')]),
      engine: new FormControl('', [Validators.required]),
      fuel: new FormControl('', [Validators.required]),
      gear: new FormControl('', [Validators.required]),
      wheels_drive: new FormControl('', [Validators.required]),
      doors: new FormControl('', [Validators.required]),
      seats: new FormControl('', [Validators.required]),
      fuel_consumption: new FormControl('', [Validators.required]),
      features: new FormArray([new FormControl('')]),
      car_class: new FormControl('', [Validators.required]),
      price_per_day: new FormControl('', [Validators.required]),
      distance_included: new FormControl('', [Validators.required]),
      about: new FormControl(),
      lat: new FormControl('', [Validators.required]),
      lng: new FormControl('', [Validators.required]),
      place_id: new FormControl('', [Validators.required])
    });
    this.options = {
      componentRestrictions: {
        country: ['IL']
      }
    };
  }

  // Make markers on map
  // I have problem with form
  handleAddressChange(event) {
    if (event) {
      // @ts-ignore
      document.querySelector('#country').value = 'Israel';
      // @ts-ignore
      document.querySelector('#city').value = event.vicinity;
      // @ts-ignore
      document.querySelector('#street').value = event.name !== event.vicinity ? event.name : null;
      this.carInformation.controls.lat.setValue(event.geometry.location.lat());
      this.carInformation.controls.lng.setValue(event.geometry.location.lng());
      this.carInformation.controls.place_id.setValue(event.place_id);
      this.latitude = event.geometry.location.lat();
      this.longitude = event.geometry.location.lng();
      this.zoom = 17;
      this.hiddenMarker = false;
    }
    return false;
  }

  // Select image from local storage
  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  // Uploading files to cloudinary
  onUploadFile() {
    const fd = new FormData();
    fd.append('upload_preset', environment.cloudDinary.upload_preset);
    fd.append('folder', `ilCarr/cars_img/${btoa(JSON.parse(localStorage.getItem('activeAppUser')).user.email)}`);
    fd.append('tags', 'browser_upload');
    fd.append('file', this.selectedFile);
    this.httpClient.post<any>(environment.cloudDinary.cloudinary_URL + '/upload', fd).subscribe(data => {
      this.uploadedImages.push({url: data.url, public_id: data.public_id});
      this.selectedFile = null;
    });
  }

  // Add input features
  addFeatInput() {
    (this.carInformation.controls.features as FormArray).push(new FormControl(''));
  }

  // Add car
  onAddCar(form) {
    const tmpImgUrls: string[] = [];
    if (this.uploadedImages.length !== 0) {
      this.uploadedImages.forEach(imgData => tmpImgUrls.push(imgData.url));
    }
    const newCar: Car = {
      serial_number: form.serial_number, make: form.make, model: form.model, year: form.year, engine: form.engine, fuel: form.fuel,
      gear: form.gear, wheels_drive: form.wheels_drive, doors: form.doors, seats: form.seats, fuel_consumption: form.fuel_consumption,
      features: form.features, car_class: form.car_class, price_per_day: form.price_per_day, distance_included: form.distance_included,
      about: form.about, pick_up_place: {place_id: form.place_id, latitude: form.lat, longitude: form.lng}, image_url: tmpImgUrls
    };
    this.carsService.addCar(newCar).then(res => {
        console.log(res);
        alert('Car successfully added');
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    ).catch(err => alert(err));
  }

}
