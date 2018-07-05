import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoUpdateComponent } from './produto-update/produto-update.component';
import { ProdutoCreateComponent } from './produto-create/produto-create.component';

const routes: Routes = [
  //{path: '', redirectTo: 'produto-list', pathMatch: 'full' },
  {path: 'produto-list', component:ProdutosComponent},
  {path: 'produto-update/:id', component:ProdutoUpdateComponent},
  {path: 'produto-create', component:ProdutoCreateComponent},
  {path: 'produto-list/search/:field/:term', component:ProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
