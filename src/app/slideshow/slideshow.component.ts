import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['japan(1).jpg','japan(2).jpg','japan(3).jpg','japan(4).jpg']
  headlines = [
    'Experience the Enchanting Ambiance of Japan',
    'Japans Rich Cultural Tapestry',
    'Exploring the Multifaceted Wonders of Japan',
    'Embracing the Beauty and Tranquility of Japan']
    
  currentImage = 0;
  showImage = true;
  
  ngOnInit() {
    this.updateImage();
  }

  updateImage(){

    setInterval(() =>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage=false;

      setTimeout(() => {
        this.showImage= true;
      }, 10);
    },8000)
  }
}
