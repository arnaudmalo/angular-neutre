import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {MessagesModule} from "primeng/messages";
import {PaginatorModule} from "primeng/paginator";
import {RippleModule} from "primeng/ripple";
import {SharedModule} from "../shared/shared.module";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-agent',
  standalone: true,
    imports: [
        ButtonModule,
        MessagesModule,
        PaginatorModule,
        RippleModule,
        SharedModule,
        SharedModule,
        TableModule,
        ToastModule,
        TooltipModule
    ],
  templateUrl: './agent.component.html',
  styleUrl: './agent.component.scss'
})
export class AgentComponent {

}
