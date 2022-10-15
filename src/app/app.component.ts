import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IGallery } from './app.interface';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gallery: IGallery[] = [];
  images: any;
  displayBasic: boolean;
  activeIndex: number = 0;

  constructor(private appService: AppService) {
    this.displayBasic = false;
  }

  ngOnInit() {
    this.appService.getData().subscribe(data => {
      this.gallery = data;
    });
  }

  preview(i: number){
    this.images = this.gallery.map(el => {
      return {
        previewImageSrc: el.art,
        thumbnailImageSrc: el.art,
        alt: el.book,
        title: el.quote,
        author: el.author,
        artist: el.artist,
        shop: el.shop
      };
    });
    this.activeIndex = i;
    this.displayBasic = true;
  }

}
