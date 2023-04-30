import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ConfirmationEmailComponent } from './confirmation-email/confirmation-email.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  declarations: [HomeComponent, ConfirmationEmailComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [HomeComponent, ConfirmationEmailComponent]
})
export class PagesModule { }
