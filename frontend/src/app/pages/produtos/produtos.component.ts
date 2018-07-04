import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos/produto.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public pageProdutos: Observable<any>;

  constructor(
    private service: ProdutoService,
    public router: Router
  ) { }

  ngOnInit() {
    this.pageProdutos = this.service.list();
    this.pageProdutos.subscribe(response => {
      console.table(response);
    })
  }

  update(produto) {
    this.router.navigate(['produto-update', produto._id]);
    console.log(produto._id);
  }
  
  remove(produto) {
    if (confirm('Confirma remoção do produto ' + produto.nome + '?')) {
      this.service.remove(produto._id).subscribe(resposta => {
        this.pageProdutos = this.service.list();
      })
    }
  }

  search(event) {
    let term = (event.type == 'search') ? event.target.value : event;
    this.pageProdutos = (term) ? this.service.search('nome', term) : this.service.list();
  }

}
