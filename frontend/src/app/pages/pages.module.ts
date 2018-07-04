import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutosModule } from '../produtos/produtos.module';
import { ListComponent } from '../produtos/list/list.component';
import { FormComponent } from '../produtos/form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ProdutosModule,
    SharedModule,
    PagesRoutingModule
  ],
  entryComponents: [
    ListComponent,
    FormComponent
  ],
  declarations: [ProdutosComponent, ProdutoCreateComponent, ProdutoUpdateComponent]
})
export class PagesModule { }
