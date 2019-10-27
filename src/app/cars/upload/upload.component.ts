import {Component, OnInit} from '@angular/core';
import {Cloudinary} from '@cloudinary/angular-5.x';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

export interface ImageCar {
  url: string;
  public_id: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})

export class UploadComponent implements OnInit {

  options = {
    componentRestrictions: {
      country: ['IL']
    }
  };

  formattedAddress: string;
  latitude = 30.8760272;
  longitude = 35.0015196;
  zoom = 8;
  selectedFile: File = null;
  uploadedImages: ImageCar[] = [];
  feats: number[] = [1];

  constructor(private cloudinary: Cloudinary, private httpClient: HttpClient) {
  }

  ngOnInit() {

  }

  handleAddressChange(event) {
    console.log(event);
    this.latitude = event.geometry.location.lat();
    this.longitude = event.geometry.location.lng();
    this.formattedAddress = event.formatted_address;
    this.zoom = 17;
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
  }

  onUploadFile() {
    const fd = new FormData();
    fd.append('upload_preset', environment.cloudDinary.upload_preset);
    fd.append('folder', 'ilCarr/cars_img');
    fd.append('tags', 'browser_upload');
    fd.append('file', this.selectedFile);
    this.httpClient.post<any>(environment.cloudDinary.cloudinary_URL + '/upload', fd).subscribe(data => {
      this.uploadedImages.push({url: data.url, public_id: data.public_id});
    });
  }

  onDeleteFile() {
    // TODO
  }

  addFeatInput() {
    this.feats.push(this.feats.length);
  }


  onAddCar(form: NgForm) {
    console.log(form);
  }
}
