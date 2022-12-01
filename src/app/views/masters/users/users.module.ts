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
import { CreateEditUserComponent } from './create-edit-user/create-edit-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

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
    UsersRoutingModule
  ],
  declarations: [
    CreateEditUserComponent,
    UsersListComponent
  ],
})
export class UsersModule {}
