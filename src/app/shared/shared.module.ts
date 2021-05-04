import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { HeaderComponent } from './components/header/header.component';
import { ProdutoCardComponent } from './components/produto-card/produto-card.component';
import { MatCardModule } from '@angular/material/card';
import { MaxCharacterPipe } from './pipes/max-caracter/max-character.pipe';


@NgModule({
  declarations: [
    HeaderComponent,
    ProdutoCardComponent,
    MaxCharacterPipe
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatBottomSheetModule
  ],
  exports: [
    HeaderComponent,
    ProdutoCardComponent,
    MaxCharacterPipe
  ]
})
export class SharedModule { }
