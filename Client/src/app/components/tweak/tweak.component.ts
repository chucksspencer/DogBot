import { Component } from '@angular/core';
import { DispenserService } from '../../services/dispenser.service';

@Component({
  selector: 'app-tweak',
  templateUrl: './tweak.component.html',
  styleUrls: ['./tweak.component.scss']
})
export class TweakComponent {
  public processing = false;
  fastMoveDistance = 80;
  slowMoveDistance = 10;
  wiggleDistance = 20;

  constructor(private dispenserService: DispenserService) { }

  moveLeftFast() {
    this.processing = true;
    this.dispenserService.moveLeft(this.fastMoveDistance)
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }

  moveLeftSlow() {
    this.processing = true;
    this.dispenserService.moveLeft(this.slowMoveDistance)
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }

  moveRightFast() {
    this.processing = true;
    this.dispenserService.moveRight(this.fastMoveDistance)
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }

  moveRightSlow() {
    this.processing = true;
    this.dispenserService.moveRight(this.slowMoveDistance)
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }

  wiggleLeft() {
    this.processing = true;
    this.dispenserService.wiggle(this.wiggleDistance, 'ccw')
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }

  wiggleRight() {
    this.processing = true;
    this.dispenserService.wiggle(this.wiggleDistance, 'cw')
      .finally(() => this.processing = false)
      .subscribe(res => {});
  }
}
