import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailGuard } from './components/student-detail/student-detail-guard'

const routes: Routes = [
  {
    path: 'students/:id',
    component: StudentDetailComponent,
    canActivate: [StudentDetailGuard]

  },
  {
    path: 'students/:id/edit',
    component: StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
