import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos/produto.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})
export class ProdutoUpdateComponent implements OnInit {

  private id: string;
  public produto$: Observable<any>;
  public message: string;

  constructor(
    private service: ProdutoService,
    private router:Router,
    private route: ActivatedRoute
  ) { 
    route.params.subscribe(params=>{
      this.getProduto(params.id);
    })
  }

  getProduto(id){
    this.id = id;
    this.produto$ = this.service.get(id);
    console.log("Este produto retornou"+this.produto$);
  }

  save(produto){
    this.service.update(this.id, produto).subscribe((response:any)=>{
      this.message = response.message;
      this.router.navigate(['produto-list']);
    });
  }

  ngOnInit() {
  }

}
