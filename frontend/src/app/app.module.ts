import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutosModule } from './produtos/produtos.module';
import { ListComponent } from './produtos/list/list.component';
import { ProdutoService } from './produtos/produto.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './produtos/form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProdutosModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [
    ListComponent,
    FormComponent
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
