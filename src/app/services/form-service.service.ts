import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class FormService {

  constructor() { }

  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  saveFormData(data: any) {
    this._listners.next(data);
  }
}
