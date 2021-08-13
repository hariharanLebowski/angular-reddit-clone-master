import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DepartmentModel } from './department-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Array<DepartmentModel>> {
    return this.http.get<Array<DepartmentModel>>('http://localhost:8080/api/department');
  }

  createDepartment(departmentModel: DepartmentModel): Observable<DepartmentModel> {
    return this.http.post<DepartmentModel>('http://localhost:8080/api/department',
      departmentModel);
  }
}
