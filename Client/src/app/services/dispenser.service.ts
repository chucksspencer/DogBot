import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * This service makes calls to the back end that cause the motor to turn and dispense treats (hopefully)
 */
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

  moveTo(targetPosition: number): Observable<boolean> {
    const url = '/dispenser/moveTo';
    const payload = { position: targetPosition };
    const jsonPayload = JSON.stringify(payload);
    return this.http.post(url, jsonPayload).map(res => {
      return true;
    });
  }

}
