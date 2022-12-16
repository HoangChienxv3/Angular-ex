import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailComponent,
    AccountCreateComponent,
    AccountEditComponent,
    AccountListComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
