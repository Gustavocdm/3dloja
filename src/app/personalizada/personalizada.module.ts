import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalizadaRoutingModule } from './personalizada-routing.module';
import { PersonalizadaComponent } from './personalizada.component';


@NgModule({
  declarations: [
    PersonalizadaComponent
  ],
  imports: [
    CommonModule,
    PersonalizadaRoutingModule
  ]
})
export class PersonalizadaModule { }
