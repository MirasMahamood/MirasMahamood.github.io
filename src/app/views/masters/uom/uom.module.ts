import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// core-ui

import { GridModule } from '@coreui/angular';
// primeng
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import {TooltipModule} from 'primeng/tooltip';

// views
import { UoMRoutingModule } from './uom-routing.module';
import { UomListComponent } from './uom-list/uom-list.component';
import { CreateEditUomComponent } from './create-edit-uom/create-edit-uom.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmPopupModule,
    InputNumberModule,
    InputTextModule,
    GridModule,
    ReactiveFormsModule,
    TableModule,
    ToastModule,
    TooltipModule,
    UoMRoutingModule
  ],
  declarations: [
    UomListComponent,
    CreateEditUomComponent
  ],
})
export class UoMModule {}
