import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { WINDOW, WINDOW_PROVIDERS } from 'src/app/services/window/window.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  providers: [WINDOW_PROVIDERS],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public windowWidth!: number;

  constructor(@Inject(WINDOW) private window: Window) { }

  ngOnInit(): void {
    console.log('INJECTED WINDOW', this.window);
    this.windowWidth = this.window.innerWidth;
  }

}
