import {Injectable} from '@angular/core';
import {Team} from './team';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {apiUrl} from '../../shared/api-url.constants';
import {Observable} from "rxjs";

@Injectable()
export class TeamService {

  constructor(private _http: Http) {
  }

  create(team: Team) {
    return this._http.post("/teams", team)
        .map(data => data.json)
        .toPromise()
  }

  destroy(team: Team) {
    return this._http.delete("/teams/" + team.id)
        .map(data => data.json)
        .toPromise()

  }

  update(team: Team) {
    return this._http.put("/teams/" + team.id, team)
        .map(data => data.json)
        .toPromise()

  }


  getTeam(team: Team) {
    return this._http.get("/teams/" + team.id)
        .map(data => data.json)
        .toPromise()

  }

  getTeams(): Observable<any> {
    return this._http.get(apiUrl + '/teams')
        .map(
            (res: Response) => {
              return res.json().teams;
            }
        )
  }

}
