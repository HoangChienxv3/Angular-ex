import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Ds1Component } from './ds1/ds1.component';
import { Ds2Component } from './ds2/ds2.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardComponent,
        children: [
          { path: '', component: Ds1Component },
          { path: 'ds1', component: Ds1Component },
          { path: 'ds2', component: Ds2Component }
        ]
      }
    ]
  }
];
@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule { }
