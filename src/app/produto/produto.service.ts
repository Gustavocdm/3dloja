import { Produto } from './produto';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private produtos: Produto[] = [
    new Produto('Geralt', 'https://www.pngjoy.com/pngl/768/9152107_geralt-witcher-3-geralt-figure-hd-png-download.png', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 1),
    new Produto('Superman', 'https://http2.mlstatic.com/D_NQ_NP_897937-MLB43147798580_082020-O.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 2),
    new Produto('Saitama', 'https://http2.mlstatic.com/D_NQ_NP_2X_719496-MLB43300222925_082020-F.webp', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 3),
    new Produto('God of War', 'https://img.elo7.com.br/product/zoom/23E863C/kratos-feito-em-impressora-3d-e-pintado-a-mao-ou-sem-pintura-miniaturas.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 4),
    new Produto('game of thrones', 'https://cdn.thingiverse.com/renders/a9/f0/11/2b/19/b7a9753fbd3105343debbc7c8df57d16_preview_card.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 5),
    new Produto('game of thrones', 'https://i.imgur.com/BaWeAzp.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 6),
    new Produto('game of thrones', 'https://www.hojeemdia.com.br/polopoly_fs/1.7949!/image/image.jpg_gen/derivatives/landscape_653/image.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 7),
    new Produto('God of War', 'https://cdn.awsli.com.br/600x450/535/535888/produto/29565582/f35308fbf3.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 8),
    new Produto('Geralt', 'https://img.elo7.com.br/product/main/1CB38A6/topo-e-bolo-personalizados-topo-de-bolo-com-cerveja.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 9),
   new Produto('Geralt', 'https://cdn.thingiverse.com/renders/00/8c/ba/60/7d/5a941864681b84c4e8f9bad422a3c5ea_preview_card.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 10),
    new Produto('Boku No Hero Academia', 'https://pbs.twimg.com/media/ESMWalvWoAATXp5.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 11),
    new Produto('Mary Jane', 'https://http2.mlstatic.com/D_NQ_NP_2X_987387-MLB45322887796_032021-F.webp', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 12),
    new Produto('Ciri', 'https://assets.3dtotal.com/data-import/data/images/tutorials/2448-tid-2017-09-28-177816-ciribeautyshotfinal-jpg.4bk9u7.image.rhz.jpg', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 13),
    new Produto('Ciri', 'https://http2.mlstatic.com/D_NQ_NP_2X_847382-MLB41898387334_052020-F.webp', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 14),
    new Produto('Geralt', 'https://http2.mlstatic.com/D_NQ_NP_2X_796158-MLB40205267545_122019-F.webp', 'Estátua do Geralt de 50cm de altura com o material plástico tipo PLA.', 50, 15),
  ];

  constructor() { }

  getProdutos(): Observable<Produto[]> {
    return of(this.produtos);
  }

  findProduto(id: number): Produto {
    return this.produtos.find(produto => produto.id == id)!;
  }

}
