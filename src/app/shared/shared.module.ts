import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { HeaderComponent } from './components/header/header.component';
import { ProdutoCardComponent } from './components/produto-card/produto-card.component';
import { MatCardModule } from '@angular/material/card';
import { MaxCharacterPipe } from './pipes/max-caracter/max-character.pipe';
import { BtnSubmitComponent } from './components/btn-submit/btn-submit.component';
import { RodapeComponent } from './components/rodape/rodape.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProdutoCardComponent,
    MaxCharacterPipe,
    BtnSubmitComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatBottomSheetModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ProdutoCardComponent,
    MaxCharacterPipe,
    BtnSubmitComponent,
    RodapeComponent
  ]
})
export class SharedModule { }
