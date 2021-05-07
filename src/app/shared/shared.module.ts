import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

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
    MatBottomSheetModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    ProdutoCardComponent,
    MaxCharacterPipe
  ]
})
export class SharedModule { }
