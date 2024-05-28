import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { CreateUpdateDepartementComponent } from './create-update-departement/create-update-departement.component';
import { DetailDepartementComponent } from './detail-departement/detail-departement.component';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { DividerModule } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { DropdownModule } from 'primeng/dropdown';
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "../../../shared/shared.module";
import {RadioButtonModule} from "primeng/radiobutton";
import {MessagesModule} from "primeng/messages";
import {CheckboxModule} from "primeng/checkbox";
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    DepartementComponent,
    CreateUpdateDepartementComponent,
    DetailDepartementComponent
  ],
    imports: [
        CommonModule,
        DepartementRoutingModule,
        MenubarModule,
        TableModule,
        ButtonModule,
        RippleModule,
        DividerModule,
        FormsModule,
        ChipsModule,
        DropdownModule,
        PaginatorModule,
        SharedModule,
        RadioButtonModule,
        MessagesModule,
        CheckboxModule,
        ToastModule
    ]
})
export class DepartementModule { }
