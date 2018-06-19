import { Component } from '@angular/core';
import { ProdutoService } from './produtos/produto.service';

interface Alert {
  type?: string;
  message?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produtos;
  alert: Alert;
  produto: any;
  id: string;
   

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    
    this.listar();
    this.produto = {};
  }

  update(produto) {
    this.id = produto._id;
    this.produto = produto;
  }

  listar(){
    this.produtoService.list().subscribe(resposta=>
      this.produtos = resposta);
      console.log(this.produtos);
  }

  remove(produto) {
    if (confirm('Confirma remoção do produto ' + produto.nome + '?')) {
      this.produtoService.remove(produto._id).subscribe(resposta => {
        this.alert = resposta;
        this.alert.message= 'Removido com sucesso!';
        this.listar();
      })
    }
  }

  submit(produto) {
    if (this.id) {
      this.produtoService.update(this.id, produto).subscribe(resposta => {
        this.alert = resposta;
        this.alert.type = 'success';
        this.alert.message= 'Atualizado com sucesso!';
        this.listar();
      })
      
    } else {
      this.produtoService.create(produto).subscribe(resposta => {
        this.alert = resposta;
        this.alert.type = 'success';
        this.alert.message= 'Salvo com sucesso!';
        this.listar();
        
        console.log("produto: ", produto);

      }) 
      this.id = null;
  }
  
  }

  




}
