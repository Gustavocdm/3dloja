import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 1),
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 2),
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 3),
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 4),
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 4),
  ];

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  findProduto(id: number): Produto {
    return this.produtos.find(produto => produto.id == id)!;
  }

}
