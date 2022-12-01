import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// CoreUI Modules
import {
  AccordionModule,
  BadgeModule,
  BreadcrumbModule,
  CardModule,
  CarouselModule,
  CollapseModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  NavModule,
  PaginationModule,
  PlaceholderModule,
  PopoverModule,
  ProgressModule,
  SharedModule,
  SpinnerModule,
  TabsModule,
  TooltipModule,
  UtilitiesModule
} from '@coreui/angular';


import { IconModule } from '@coreui/icons-angular';

// primeng
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

// utils
import { DocsComponentsModule } from '@docs-components/docs-components.module';

// views
import { CardsComponent } from './cards/cards.component';

// Components Routing
import { MastersRoutingModule } from './masters-routing.module';
import { MastersComponent } from './masters.component';

@NgModule({
  imports: [
    CommonModule,
    MastersRoutingModule,
    AccordionModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonModule,
    CardModule,
    CollapseModule,
    GridModule,
    UtilitiesModule,
    SharedModule,
    ListGroupModule,
    IconModule,
    InputTextModule,
    ListGroupModule,
    PlaceholderModule,
    ProgressModule,
    SpinnerModule,
    TabsModule,
    NavModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DropdownModule,
    PaginationModule,
    PopoverModule,
    TableModule,
    DocsComponentsModule,
  ],
  declarations: [
    CardsComponent,
    MastersComponent
  ],
})
export class MastersModule {}
