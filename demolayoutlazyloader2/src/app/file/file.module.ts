import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { FileRoutingModule } from './file-routing.module';



@NgModule({
  declarations: [
    FileComponent
  ],
  imports: [
    CommonModule,
    FileRoutingModule
  ]
})
export class FileModule { }
