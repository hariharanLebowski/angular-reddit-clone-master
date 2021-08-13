import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentModel } from '../department-response';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {
  createDepartmentForm: FormGroup;
  departmentModel: DepartmentModel;
  title = new FormControl('');
  description = new FormControl('');

  constructor(private router: Router, private departmentService: DepartmentService) {
    this.createDepartmentForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    this.departmentModel = {
      name: '',
      description: ''
    }
  }

  ngOnInit() {
  }

  discard() {
    this.router.navigateByUrl('/');
  }

  createDepartment() {
    this.departmentModel.name = this.createDepartmentForm.get('title')
    .value;
    this.departmentModel.description = this.createDepartmentForm.get('description')
    .value;
    this.departmentService.createDepartment(this.departmentModel).subscribe(data => {
      this.router.navigateByUrl('/list-departments');
    }, error => {
      throwError(error);
    })
  }
}