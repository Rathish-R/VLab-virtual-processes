import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MechanicaloperationsComponent } from './mechanicaloperations.component';
import { CycloneSeparatorComponent } from '../cyclone-separator/cyclone-separator.component';

const routes: Routes = [{ path: '', component: MechanicaloperationsComponent,children:[
  { path: "CycloneSeparator", component: CycloneSeparatorComponent }],}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MechanicaloperationsRoutingModule { }
