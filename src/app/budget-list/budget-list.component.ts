import { Component, inject, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Budget } from '../models/budget';
import { Router } from '@angular/router';

@Component({
  selector: 'app-budget-list',
  standalone: true,
  imports: [],
  templateUrl: './budget-list.component.html',
  styleUrl: './budget-list.component.css',
})
export class BudgetListComponent implements OnInit{
  private readonly budgetService = inject(BudgetService);
  private readonly router = inject(Router);
  budgetLst:Budget[]=[];

  ngOnInit(): void {
    this.budgetService.getBudgets().subscribe((data)=>{
      this.budgetLst=data;
    })
  }

  checkBudget(id:string|undefined){
    this.router.navigate(['viewbudget',id]);
  }
  /* ADDITIONAL DOCS:
    - https://angular.dev/guide/components/lifecycle#
    - https://angular.dev/guide/http/making-requests#http-observables
    - https://angular.dev/guide/http/setup#providing-httpclient-through-dependency-injection
    - https://angular.dev/guide/http/making-requests#setting-request-headers
    - https://angular.dev/guide/http/making-requests#handling-request-failure
    - https://angular.dev/guide/http/making-requests#best-practices (async pipe)
    - https://angular.dev/guide/testing/components-scenarios#example-17 (async pipe)
  */
}
