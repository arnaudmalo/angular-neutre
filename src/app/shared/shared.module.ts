import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';



@NgModule({
    declarations: [
        ConfirmationComponent,
    ],
    exports: [
        ConfirmationComponent
    ],
    imports: [
        CommonModule,
        ConfirmDialogModule,
        TableModule,
        PaginatorModule
    ]
})
export class SharedModule { }
