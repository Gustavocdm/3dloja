import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { Produto } from '../produto/produto';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  produtos$: Observable<Produto[]>;

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit(): void {
    this.produtos$ = this.produtoService.getProdutos();
  }

  onComprarProduto(produto: Produto) {
    console.log(produto);
    this.router.navigate(['']);
  }

}
