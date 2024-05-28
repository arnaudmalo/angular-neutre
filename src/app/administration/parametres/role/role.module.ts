import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import { RoleComponent } from './role.component';
import { DetailRoleComponent } from './detail-role/detail-role.component';
import { RoleRoutingModule } from './role-routing.module';
import { CreateUpdateRoleComponent } from './create-update-role/create-update-role.component';


@NgModule({
  declarations: [
    RoleComponent,
    CreateUpdateRoleComponent,
    DetailRoleComponent
  ],
    imports: [
        CommonModule,
        RoleRoutingModule,
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
export class RoleModule { }
