import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LinkExpiredComponent } from './link-expired/link-expired.component';

const routes: Routes = [
  {
    path: 'confirmation',
    component: ConfirmationEmailComponent
  },
  {
    path: 'forgot/:token',
    component: ForgotPasswordComponent
  },
  {
    path: 'expired',
    component: LinkExpiredComponent
  },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
