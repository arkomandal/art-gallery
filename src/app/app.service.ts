import { Injectable } from '@angular/core';
import { IGallery } from './app.interface';
import { Observable, of } from 'rxjs';
import galleryJson from '../assets/documents/gallery.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor() { }
  
  getData(): Observable<IGallery[]> {
    return of(galleryJson);
  }

}
