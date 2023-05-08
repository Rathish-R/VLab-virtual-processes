import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluidMechanicsExpComponent } from './fluid-mechanics-exp.component';
import { AnnulusPipeComponent } from '../annulus-pipe/annulus-pipe.component';

const routes: Routes = [{ path: '', component: FluidMechanicsExpComponent,children:[
  { path: "AnnulusPipes", component: AnnulusPipeComponent },] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluidMechanicsExpRoutingModule { }
