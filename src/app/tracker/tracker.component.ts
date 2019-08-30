import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.sass']
})
export class TrackerComponent implements OnInit {
  rectangle: any
  subscription: Subscription
  X = 0
  Y = 0

  constructor() { }

  ngOnInit() {
    this.rectangle = document.getElementById('rectangle');
    const mouseMoves = fromEvent(this.rectangle, 'mousemove');

    this.subscription = mouseMoves.subscribe((e: MouseEvent) => {
      this.X = e.clientX;
      this.Y = e.clientY;
    })
  }

}
