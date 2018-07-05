import { Component } from '@angular/core';
import { ProdutoService } from './produtos/produto.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Projeto Mean Stack 1.0"; 
  public pageProdutos: Observable<any>;
  
  constructor(
    private service: ProdutoService,
    private router: Router
  ) { }

  ngOnInit() {
    
  }
  
  search(event) {
    let term = (event.type == 'search') ? event.target.value : event;
    if(term==""){
      this.router.navigate(['produto-list/']);
    }else{
      this.router.navigate(['produto-list/search/nome/'+term]);
    }
  }

}
