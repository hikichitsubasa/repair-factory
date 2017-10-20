import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {WorkerService} from "../../../shared/worker/worker.service";
import {Response} from "@angular/http";

@Component({
    selector: 'app-worker-list',
    templateUrl: './worker-list.component.html',
    styleUrls: ['./worker-list.component.scss']
})
export class WorkerListComponent implements OnInit {
    @Input() workers;
    @Output() onEditWorker$ = new EventEmitter();

    constructor(private _workerService: WorkerService) {
    }

    ngOnInit() {
    }


    getWorkers() {
        this._workerService.getWorkers()
            .subscribe(
                (workers: Worker[]) => this.workers = workers,
                (error: Response) => console.log(error)
            )
    }

    onEditWorker(worker){
        console.log(worker);
        this.onEditWorker$.emit(worker);

    }

    deleteWorker(worker) {
        this._workerService.deleteWorker(worker)
            .then(status => this.getWorkers())
            .catch(err => console.log(err));
    }


}

