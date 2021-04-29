import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imago',
  templateUrl: './imago.component.html',
  styleUrls: ['./imago.component.scss'],
})
export class ImagoComponent implements OnInit {
  values: any = {
    blue: 0,
    white: 0,
    yellowO: 0,
    yellowR: 640,
    greenO: 0,
    greenR: 520,
    redO: 0,
    redR: 400,
  };

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.animate(this.values.redO, 1, 1.5, 'redO');
      this.animate(this.values.redR, 0, 1.5, 'redR');
      this.animate(this.values.greenO, 1, 1.5, 'greenO');
      this.animate(this.values.greenR, 0, 1.6, 'greenR');
      this.animate(this.values.yellowO, 1, 1.5, 'yellowO');
      this.animate(this.values.yellowR, 0, 1.7, 'yellowR');
    }, 1000);
    setTimeout(() => {
      this.animate(this.values.blue, 1.2, 1, 'blue');
      setTimeout(() => {
        this.animate(this.values.blue, 1, 0.2, 'blue');
      }, 1000);
    }, 1000);
    setTimeout(() => {
      this.animate(this.values.white, 1.2, 1.4, 'white');
      setTimeout(() => {
        this.animate(this.values.white, 1, 0.4, 'white');
      }, 1400);
    }, 500);
  }
  private animate(
    from: number,
    target: number,
    duration: number,
    reference: string
  ) {
    const c = target - from;
    const t0 = this.current();
    let t;
    const interval = setInterval(() => {
      t = this.current() - t0;
      if (t >= duration) {
        clearInterval(interval);
        this.values[reference] = target;
      } else {
        t /= duration / 2;
        if (t < 1) {
          this.values[reference] = (c / 2) * t * t * t + from;
        } else {
          t -= 2;
          this.values[reference] = (c / 2) * (t * t * t + 2) + from;
        }
      }
    }, 1);
  }
  private current(): number {
    return new Date().getTime() / 1000;
  }
}
