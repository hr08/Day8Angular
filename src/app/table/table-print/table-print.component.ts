import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table-print',
  templateUrl: './table-print.component.html',
  styleUrls: ['./table-print.component.css']
})
export class TablePrintComponent implements OnInit {
  @Input() emps;

  onDelete(index) {
    index = this.emps.indexOf(this.emps);
    this.emps.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
