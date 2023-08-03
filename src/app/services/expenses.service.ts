import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  baseUrl:string = "http://localhost:5280/api/expenses/";

  constructor(private http: HttpClient){}


}
