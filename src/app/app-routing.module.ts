import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormDataComponent } from './component/form-data/form-data.component';
import { TableFormDataComponent } from './component/table-form-data/table-form-data.component';

const routes: Routes = [
  {
    path: '',
    component: FormDataComponent
  },
  {
    path: 'table-data',
    component: TableFormDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
