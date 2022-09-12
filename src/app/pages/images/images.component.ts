import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  public windowWidth = window.innerWidth;

  constructor() { }

}
