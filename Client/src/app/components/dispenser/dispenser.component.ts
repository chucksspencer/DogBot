import { Component, OnInit } from '@angular/core';
import { DispenserService } from '../../services/dispenser.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-dispenser',
  templateUrl: './dispenser.component.html',
  styleUrls: ['./dispenser.component.scss']
})
export class DispenserComponent implements OnInit {
  public moveValue = 0;
  public message = null;
  public processing = false;

  constructor(private dispenserService: DispenserService) { }

  ngOnInit() {
  }

  dispenseLeft() {
    this.processing = true;
    this.dispenserService.dispenseLeft()
      .finally(() => this.processing = false)
      .subscribe(res => {
        this.flashMessage('Dispensed left! Delicious');
      },
      error => {
        this.flashMessage('Error dispensing left!');
      }
      );
  }

  dispenseRight() {
    this.processing = true;
    this.dispenserService.dispenseRight()
      .finally(() => this.processing = false)
      .subscribe(
      res => {
        this.flashMessage('Dispensed right! Yum!');
      },
      error => {
        this.flashMessage('Error dispensing right!');
      }
      );
  }

  moveToTarget() {
    this.processing = true;
    this.dispenserService.moveTo(this.moveValue)
      .finally(() => {
        this.processing = false;
        this.moveValue = 0;
      })
      .subscribe(res => {
        this.flashMessage('Moved ' + this.moveValue);
      },
      error => {
        this.flashMessage('Error moving!');
      }
      );
  }

  flashMessage(newMessage: string) {
    this.message = newMessage;
    setTimeout(() => {
      this.message = null;
    }, 2000);
  }

}
