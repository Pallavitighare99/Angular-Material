import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/student';
import studentData  from 'student.json'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  
  students: Student[] = studentData;

  displayedColumns: string[] = ['position', 'empId','name','email', 'phone', 'gender'];
  dataSource = this.students;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    this.router.navigate(['/dashboard/customerlink'])
  }
}
