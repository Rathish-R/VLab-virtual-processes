import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MassTransferExpComponent } from './mass-transfer-exp.component';
import { RotaryDryerComponent } from '../rotary-dryer/rotary-dryer.component';

const routes: Routes = [{ path: '', component: MassTransferExpComponent ,children :[
  { path: 'RotaryDryer', component: RotaryDryerComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MassTransferExpRoutingModule { }
