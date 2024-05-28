import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        DialogService,
        ConfirmationService,
        MessageService,
        DynamicDialogRef,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        // {
        //     provide : HTTP_INTERCEPTORS,
        //     useClass: IfuGlobalInterceptor,
        //     multi   : true,
        // },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
