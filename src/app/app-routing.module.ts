import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialEventsComponent } from './social-events/social-events.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { ShowCaseComponent } from './show-case/show-case.component';
import { MenuBudgetComponent } from './show-case/menu-budget/menu-budget.component';
import { BudgetSavedComponent } from './budget-saved/budget-saved.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { PortifolioFormComponent } from './admin/portifolio-form/portifolio-form.component';
import { ServiceBudgetFormComponent } from './admin/service-budget-form/service-budget-form.component';
import { EditExtraServiceComponent } from './admin/edit-extra-service/edit-extra-service.component';

const routes: Routes = [
  { path: 'events', component: SocialEventsComponent },
  { path: 'submenu', component: SubmenuComponent },
  { path: '', component: SocialEventsComponent },
  { path: 'menubudget', component: MenuBudgetComponent },
  { path: 'menuadmin', component: MenuAdminComponent },
  { path: 'portifolioform', component: PortifolioFormComponent },
  { path: 'summary', component: BudgetSavedComponent },
  { path: 'showcase/:id', component: ShowCaseComponent }, //rota com parametro
  { path: 'servicebudgetform', component: ServiceBudgetFormComponent },
  { path: 'editservice/:category', component: EditExtraServiceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
