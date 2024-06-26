import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes.component';
import { unsavedChangesGuard } from '../../../../core/guards/unsaved-changes.guard';

const routes: Routes = [
  {
    // path actual: http://localhost:6900/dashboard/classes ->
    path: '',
    component: ClassesComponent,
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassesRoutingModule { }
