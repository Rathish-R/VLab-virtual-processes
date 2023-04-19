import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeatTransferComponent } from '../heat-transfer.component';
import { ShellAndTubeComponent } from 'src/app/shell-and-tube/shell-and-tube.component';

const routes: Routes = [{ path: '', component: HeatTransferComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatTransferRoutingModule { }
