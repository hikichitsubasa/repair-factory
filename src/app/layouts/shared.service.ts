import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private emitChangeSource = new Subject(); // emitChangeSource データを保持する変数

  changeEmitted$ = this.emitChangeSource.asObservable();

  emitChange(change: string){
    this.emitChangeSource.next(change);
  }

}
