import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  declarations: [ListComponent, FormComponent],
  exports: [
    ListComponent,
    FormComponent
  ]
})
export class ProdutosModule { }
