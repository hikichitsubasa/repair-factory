import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {WorkerService} from "../../../shared/worker/worker.service";

@Component({
  selector: 'app-overtime-edit',
  templateUrl: './overtime-edit.component.html',
  styleUrls: ['./overtime-edit.component.scss']
})
export class OvertimeEditComponent implements OnInit {

  @Input() selectedOvertime;
  @Input() order;
  workers: Worker[];
  @Output() updateOvertime$ = new EventEmitter();
  @Output() cancelEditOvertime$ = new EventEmitter();
  constructor(private _workerService: WorkerService) { }

  ngOnInit() {
    this.getWorkers();
  }

  getWorkers(){
    this._workerService.getWorkers()
        .subscribe(
            (workers) => this.workers = workers
        )
  }

  updateOvertime(overtime){
    this.updateOvertime$.emit(overtime);
  }

  cancelEditOvertime(overtime){
    this.cancelEditOvertime$.emit(overtime);
  }

}
