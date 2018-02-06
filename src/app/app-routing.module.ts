import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditItemComponent } from './edit-item/edit-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: DashboardComponent },
  { path: 'items/:id', component: EditItemComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
 export class AppRoutingModule {}
 export const routingComponents = [DashboardComponent, EditItemComponent];
