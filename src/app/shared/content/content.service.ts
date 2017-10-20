import {Injectable} from '@angular/core';
import {Content} from './content';
import {Http, Response} from "@angular/http";
import {apiUrl} from '../../shared/api-url.constants';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class ContentService {

  constructor(private _http: Http) {
  }

  createContent(content: Content) {
    return this._http.post(apiUrl + "/content", content)
        .map(data => data.json)
        .toPromise()
  }

  destroyContent(content: Content) {
    return this._http.delete(apiUrl + "/content/" + content.id)
        .map(data => data.json)
        .toPromise()

  }

  updateContent(content) {
    return this._http.put(apiUrl + "/content/" + content.id, content)
        .map(data=>data.json)
        .toPromise()
  }

  getContent(content: Content) {
    return this._http.get(apiUrl + "/content/" + content.id)
        .map(data => data.json)
        .toPromise()
  }

  getContents(): Observable<any> {
    return this._http.get(apiUrl + '/contents')
        .map(
            (res: Response) => {
              return res.json().contents;
            }
        )
  }

}
