import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaryDryerComponent } from './rotary-dryer/rotary-dryer.component';
import { ChemicalRectionEngineeringComponent } from './chemical-rection-engineering/chemical-rection-engineering.component';

import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'Home', component: HomeComponent, children: [
      { path: 'HeatTransfer', loadChildren: () => import('./heat-transfer/heat-transfer/heat-transfer.module').then(m => m.HeatTransferModule) },
      { path: 'MechanicalOperations', loadChildren: () => import('./mechanicaloperations/mechanicaloperations.module').then(m => m.MechanicaloperationsModule) },
      { path: 'FluidMechanics', loadChildren: () => import('./fluid-mechanics-exp/fluid-mechanics-exp.module').then(m => m.FluidMechanicsExpModule) },
      { path: "ChemicalReactionEngineering", component: ChemicalRectionEngineeringComponent },
    ]
  },
  { path: "", redirectTo:'/Home', pathMatch:'full' },
  { path: 'MassTransferExp', loadChildren: () => import('./mass-transfer-exp/mass-transfer-exp.module').then(m => m.MassTransferExpModule) },
   { path: "**", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
