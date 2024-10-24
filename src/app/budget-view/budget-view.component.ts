import { Component, inject, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../models/budget';

@Component({
  selector: 'app-budget-view',
  standalone: true,
  imports: [],
  templateUrl: './budget-view.component.html',
  styleUrl: './budget-view.component.css',
})
export class BudgetViewComponent implements OnInit{
  // ADDITIONAL DOCS: same as BudgetListComponent
  private readonly budgetService = inject(BudgetService);
  private readonly router = inject(Router);
  private readonly activatedRouter = inject(ActivatedRoute);
  budget:Budget|undefined;

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((data) => {
      this.budgetService.getBudget(data['id'])
      console.log(data['id']);
    })
  }
}
