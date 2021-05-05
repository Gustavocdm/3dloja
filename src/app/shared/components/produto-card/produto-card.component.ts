import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Produto } from '../../../produto/produto';

@Component({
  selector: 'app-produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdutoCardComponent implements OnInit {
  @Input() produto: Produto;
  @Input() mostrarBotaoComprar: boolean = true;
  @Output() comprarClicado = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onComprar() {
    this.comprarClicado.next();
  }

}
