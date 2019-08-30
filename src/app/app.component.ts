import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  seconds = 0
  timerSubscription

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
