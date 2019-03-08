import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DrawerService {
  public display: Observable<boolean>;

  private _display = new BehaviorSubject(true);

  constructor() {
    this.display = this._display.asObservable();
  }

  public show() {
    this._display.next(true);
  }

  public hide() {
    this._display.next(false);
  }

}
