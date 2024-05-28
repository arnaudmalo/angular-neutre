import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DecretRoutingModule } from './decret-routing.module';
import { DecretComponent } from './decret.component';
import { CreateUpdateDecretComponent } from './create-update-decret/create-update-decret.component';
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
import { DetailDecretComponent } from './detail-decret/detail-decret.component';


@NgModule({
  declarations: [
    DecretComponent,
    CreateUpdateDecretComponent,
    DetailDecretComponent
  ],
    imports: [
        CommonModule,
        DecretRoutingModule,
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
export class DecretModule { }
