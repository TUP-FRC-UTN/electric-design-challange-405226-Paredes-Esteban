import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Budget } from '../models/budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private readonly httpClient = inject(HttpClient);
  private readonly apiUrl = "http://localhost:3000";

  getBudgets(): Observable<Budget[]>{
    return this.httpClient.get<Budget[]>(this.apiUrl);
  }

  postBudget(budget:Budget):Observable<Budget>{
    return this.httpClient.post<Budget>(this.apiUrl,budget);
  }

  getBudget(budgetId:string):Observable<Budget>{
    return this.httpClient.get<Budget>(this.apiUrl+'/'+budgetId);
  }
}
