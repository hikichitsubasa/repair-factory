import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Worker} from "../../../shared/worker/worker";
import {WorkerService} from "../../../shared/worker/worker.service";
import {DatePipe} from "@angular/common";

@Component({
    selector: 'app-worker-new',
    templateUrl: './worker-new.component.html',
    styleUrls: ['./worker-new.component.scss'],
    providers: [WorkerService]
})
export class WorkerNewComponent implements OnInit {
    newWorker = new Worker();
    workers: Worker[];
    @Output() createWorker$ = new EventEmitter();
    @Input() editWorker;

    constructor(private _workerService: WorkerService,
                public datepipe: DatePipe) {
    }

    ngOnInit() {
    }


    createWorker(newWorker){
        newWorker.birthday = this.datepipe.transform(newWorker.birthday, 'yyyy-MM-dd');
        this.createWorker$.emit(this.newWorker);

    }



}
