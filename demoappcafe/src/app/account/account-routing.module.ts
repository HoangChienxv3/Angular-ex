import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountCreateComponent } from "./account-create/account-create.component";
import { AccountEditComponent } from "./account-edit/account-edit.component";
import { AccountListComponent } from "./account-list/account-list.component";

import { AccountComponent } from "./account.component";

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: AccountListComponent },
      { path: 'edit/:id', component: AccountEditComponent },
      { path: 'create', component: AccountCreateComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule {



}