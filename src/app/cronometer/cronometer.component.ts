import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometer',
  templateUrl: './cronometer.component.html',
  styleUrls: ['./cronometer.component.sass']
})
export class CronometerComponent implements OnInit {
  seconds = 0
  timerSubscription

  constructor() {

  }

  ngOnInit() {
    const secondsCounter = interval(1000)

    this.timerSubscription = secondsCounter.subscribe((n) => {
      this.seconds = n
    })
  }

  handleStopClick() {
    this.timerSubscription.unsubscribe();
  }

}
