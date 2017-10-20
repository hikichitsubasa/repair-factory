import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  @Input() completedQuantity;
  @Input() overtimeSumQuantityByOrderId;
  @Input() overtimeSumQuantity;
  @Input() order;
  constructor() { }

  ngOnInit() {
  }

}