import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalizadaComponent } from './personalizada.component';

const routes: Routes = [{ path: '', component: PersonalizadaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalizadaRoutingModule { }
