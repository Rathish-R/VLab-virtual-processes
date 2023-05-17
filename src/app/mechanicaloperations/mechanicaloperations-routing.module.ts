import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MechanicaloperationsComponent } from './mechanicaloperations.component';
import { CycloneSeparatorComponent } from '../cyclone-separator/cyclone-separator.component';
import { ScreenEffectivenessComponent } from '../screen-effectiveness/screen-effectiveness.component';

const routes: Routes = [{ path: '', component: MechanicaloperationsComponent,children:[
  { path: "CycloneSeparator", component: CycloneSeparatorComponent },
  { path: "ScreenEffectiveness", component: ScreenEffectivenessComponent }],}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechanicaloperationsRoutingModule { }
