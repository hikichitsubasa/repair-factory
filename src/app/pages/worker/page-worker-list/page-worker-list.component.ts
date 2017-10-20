import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {WorkerService} from "../../../shared/worker/worker.service";
import {Worker} from "../../../shared/worker/worker";
import {Router} from "@angular/router";
import {SharedService} from "../../../layouts/shared.service";

@Component({
    selector: 'app-page-worker-list',
    templateUrl: './page-worker-list.component.html',
    styleUrls: ['./page-worker-list.component.scss']
})
export class PageWorkerListComponent implements OnInit {
    pageTitle: string = '従業員一覧';
    workers: Worker[];
    editWorker: Worker;

    constructor(private _sharedService: SharedService,
                private _workerService: WorkerService,
                private router: Router) {
        this._sharedService.emitChange(this.pageTitle);
    }

    ngOnInit() {
        this.getWorkers();
    }

    getWorkers() {
        this._workerService.getWorkers()
            .subscribe(
                (workers) => this.workers = workers
            )
    }

    createWorker(newWorker) {
        this._workerService.createWorker(newWorker)
            .catch(err => console.log(err))
            .then(status => this.getWorkers());
    }

    onEditWorker(editWorker){
        this.editWorker = editWorker;
    }

}
