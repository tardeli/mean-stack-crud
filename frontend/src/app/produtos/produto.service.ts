import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) {
    console.log('Servico iniicializado.. . .');
   }

   produtosUrl = 'http://localhost:3000/produto/';

   list(){
    return this.http.get(this.produtosUrl);
  }

   create(produto:any){
     return this.http.post(this.produtosUrl, produto);
   }

   update(id, produto:any) {
    return this.http.put(this.produtosUrl + id, produto);
  }

  remove(id) {
    return this.http.delete(this.produtosUrl + id);
  }
}
