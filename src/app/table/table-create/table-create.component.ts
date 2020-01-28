import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-create',
  templateUrl: './table-create.component.html',
  styleUrls: ['./table-create.component.css']
})

 /*

  export interface employee {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  addEmployee() {
    const element: employee = [
      {
        id: this.id,
        name : this.name,
        salary : this.salary,
        department : this.department
      }
    ];
    }
  */
 export class TableCreateComponent implements OnInit {

  @Output() employeeAdded = new EventEmitter();
  empId = '';
  empName = '';
  empSalary = '';
  empDepartment = '';
  addEmployee() {
    const emp = {
      id : this.empId,
      name : this.empName,
      salary : this.empSalary,
      department : this.empDepartment
    };
    this.employeeAdded.emit(emp);
  }
  constructor() { }

  ngOnInit() {
  }

}
