import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TimeTableService} from "../../../shared/time-table/time-table.service";
import {TeamService} from "../../../shared/team/team.service";
import {Team} from "../../../shared/team/team";
import {TimeTable} from "../../../shared/time-table/time-table";
import {WorkerService} from "../../../shared/worker/worker.service";
import {Worker} from "../../../shared/worker/worker";
import {Order} from "../../../shared/order/order";

@Component({
    selector: 'app-task-record-edit',
    templateUrl: './task-record-edit.component.html',
    styleUrls: ['./task-record-edit.component.scss']
})
export class TaskRecordEditComponent implements OnInit {

    @Input() order;
    @Input() selectedTaskRecord;
    @Input() isTeamTask;
    @Output() cancelEditTaskRecord$ = new EventEmitter();
    @Output() updateTaskRecord$ = new EventEmitter();
    teams: Team[];
    workers: Worker[];
    timeTables: TimeTable[];

    constructor(private _timeTableService: TimeTableService,
                private _teamService: TeamService,
                private _workerService: WorkerService) {
    }

    ngOnInit() {
        this.getTeams();
        this.getWorkers();
        this.getTimeTables();
    }

    getTeams() {
        this._teamService.getTeams()
            .subscribe(
                (teams) => this.teams = teams
            )
    }

    getTimeTables() {
        this._timeTableService.getTimeTables()
            .subscribe(
                (timeTables) => this.timeTables = timeTables
            )
    }

    getWorkers() {
        this._workerService.getWorkers()
            .subscribe(
                (workers) => this.workers = workers
            )
    }


    updateTaskRecord(taskRecord){
        this.updateTaskRecord$.emit(taskRecord);
    }

    cancelEditTaskRecord(){
        this.cancelEditTaskRecord$.emit();
    }
}
