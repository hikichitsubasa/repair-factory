import {Injectable} from '@angular/core';
import {RepairContent} from "./repair-content";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RepairContentService {

  constructor(private http: Http) {
  }

  getRepairContents() {
    return this.http.get('../assets/data/mock-repair-content.json')
        .map((res: Response) => res.json());
  }

}
