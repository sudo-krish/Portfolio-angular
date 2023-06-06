import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splas-screen',
  templateUrl: './splas-screen.component.html',
  styleUrls: ['./splas-screen.component.css']
})
export class SplasScreenComponent implements OnInit {
  opacityChange: number = 1;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 1000);
    }, 6000);
  }
}
