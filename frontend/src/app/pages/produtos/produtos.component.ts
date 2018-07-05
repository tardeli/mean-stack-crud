import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos/produto.service';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public pageProdutos: Observable<any>;
  private param_Nome: Subscription;

  constructor(
    private service: ProdutoService,
    public router: Router,
    private route: ActivatedRoute
  ) { 
    
  }

  ngOnInit() {
    this.param_Nome = this.route.params.subscribe(
      (params: any)=>{
        let nome = params['term'];
        nome == null ?  this.listar() : this.filtrar(nome);
      } 
    );
  }

  ngOnDestroy(){
    this.param_Nome.unsubscribe();
  }

  filtrar(nome){
    this.pageProdutos = this.service.search('nome', nome);
  }

  listar(){
    this.pageProdutos = this.service.list();
    //console
    /*this.pageProdutos.subscribe(response => {
      console.table(response);
    })*/
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
}
