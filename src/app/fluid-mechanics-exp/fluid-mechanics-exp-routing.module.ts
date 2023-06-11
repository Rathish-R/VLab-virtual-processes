import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FluidMechanicsExpComponent } from './fluid-mechanics-exp.component';
import { AnnulusPipeComponent } from '../annulus-pipe/annulus-pipe.component';
import { StraightPipes } from '../straight-pipes/StraightPipe';

const routes: Routes = [{ path: '', component: FluidMechanicsExpComponent,children:[
  { path: "AnnulusPipes", component: AnnulusPipeComponent },
  { path: "StraightPipes", component: StraightPipes }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FluidMechanicsExpRoutingModule { }
