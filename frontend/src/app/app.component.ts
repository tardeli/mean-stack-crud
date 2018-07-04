import { Component } from '@angular/core';
import { ProdutoService } from './produtos/produto.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "Projeto Mean Stack 1.0"; 
  
  
  constructor(
    private service: ProdutoService
  ) { }

  ngOnInit() {
    
  }
  

}
