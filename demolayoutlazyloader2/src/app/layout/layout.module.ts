import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayOutRoutingModule } from './layout-routing.module';
import { MainLayOutComponent } from './main-lay-out/main-lay-out.component';
import { FooterComponent } from './footer/footer.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    MainLayOutComponent,
    FooterOnlyLayoutComponent,
    HeaderComponent, 
    FooterComponent, 
  ],
  imports: [
    CommonModule,
    LayOutRoutingModule
  ]
})
export class LayOutModule { }  
