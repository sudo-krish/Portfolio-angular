import { Component, OnInit ,OnDestroy} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
  navbarhide:boolean = false;
  navbarapperar:boolean = false;
  scroll$!: Subscription;
  startPosition!: number;

  constructor() {
    
  }

  ngOnInit(){
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;
      if(window.scrollY > 100) {
        if(this.startPosition > currentPosition) {
          this.navbarhide = false;
          this.navbarapperar = true;
        } else {
          this.navbarapperar = false;
          this.navbarhide = true;
        }
      } 
      else {
        this.navbarhide = false;
        this.navbarapperar = false;
      }
      this.startPosition = currentPosition
    });
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe()
  }
}

