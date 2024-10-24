import { Routes } from '@angular/router';
import { BudgetViewComponent } from './budget-view/budget-view.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { BudgetListComponent } from './budget-list/budget-list.component';

export const routes: Routes = [
    {path:'viewbudget/:id', component:BudgetViewComponent},
    {path:'createBudget', component:BudgetFormComponent},
    {path:'**', component:BudgetListComponent}
];
