import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private emitChangeSource = new Subject();

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: string){
    this.emitChangeSource.next(change);
  }
  constructor() { }

}
