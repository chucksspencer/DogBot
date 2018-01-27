import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DispenserService {
  constructor(private http: Http) { }

  dispenseLeft(): Observable<boolean> {
    const url = '/dispenser/left';
    return this.http.post(url, {}).map(res => {
      return true;
    });
  }

  dispenseRight(): Observable<boolean> {
    const url = '/dispenser/right';
    return this.http.post(url, {}).map(res => {
      return true;
    });
  }

  moveLeft(targetDistance: number): Observable<boolean> {
    return this.move(targetDistance, 'ccw');
  }

  moveRight(targetDistance: number): Observable<boolean> {
    return this.move(targetDistance, 'cw');
  }

  move(targetDistance: number, targetDirection: string): Observable<boolean> {
    const url = '/dispenser/move';
    const payload = { steps: targetDistance, direction: targetDirection };
    const jsonPayload = JSON.stringify(payload);
    return this.http.post(url, jsonPayload).map(res => {
      return true;
    });
  }

  wiggle(targetDistance: number, targetDirection: string) {
    const url = '/dispenser/wiggle';
    const payload = { distance: targetDistance, direction: targetDirection };
    const jsonPayload = JSON.stringify(payload);
    return this.http.post(url, jsonPayload).map(res => {
      return true;
    });
  }
}
