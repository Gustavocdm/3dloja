import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProdutoService } from './produto.service';
import { Produto } from './produto';
import { ESTADOS_BRASILEIROS } from './../shared/literals/estados-brasileiros';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produto;
  formulario: FormGroup;
  readonly ESTADOS_BRASILEIROS = ESTADOS_BRASILEIROS;

  constructor(private produtoService: ProdutoService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.produto = this.produtoService.findProduto(id);
    }

    this.formulario = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, [Validators.required]],
        complemento: [null],
        rua: [null, [Validators.required]],
        bairro: [null, Validators.required],
        cidade: [null, [Validators.required]],
        estado: [null, [Validators.required]]
      })
    });
  }

  onComprar() {
    console.log(this.formulario.value);
  }

}
