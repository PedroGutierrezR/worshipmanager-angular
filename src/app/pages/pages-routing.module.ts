import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';

const routes: Routes = [
  {
    path: 'confirmation',
    component: ConfirmationEmailComponent
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
