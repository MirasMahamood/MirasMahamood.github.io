import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UomListComponent } from './uom-list/uom-list.component';
import { CreateEditUomComponent } from './create-edit-uom/create-edit-uom.component';

const routes: Routes = [
  {
    path: '',
    data: { title: 'UoM' },
    children: [
      {
        path: '', pathMatch: 'full', redirectTo: 'list'
      },
      {
        path: 'list', component: UomListComponent,
        data: { title: 'List' }
      },
      {
        path: 'create', component: CreateEditUomComponent,
        data: { title: 'Create' }
      },
      {
        path: 'edit/:id', component: CreateEditUomComponent,
        data: { title: 'Edit' }
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UoMRoutingModule { }
