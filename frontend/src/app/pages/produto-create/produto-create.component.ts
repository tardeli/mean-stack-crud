import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../produtos/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  public message: string;

  constructor(
    private service: ProdutoService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  save(produto){
    this.service.create(produto).subscribe((response:any)=>{
      this.message = response.message;
      this.router.navigate(['produto-list']);
    });
  }


}
