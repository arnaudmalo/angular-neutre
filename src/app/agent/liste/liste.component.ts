import {Component, OnInit} from '@angular/core';
import {Agent} from "../agent";
import {AgentService} from "../agent.service"
import {Router, RouterLink} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {TableModule} from "primeng/table";
import {PaginatorModule, PaginatorState} from "primeng/paginator";
import {
    CreateUpdateDecretComponent
} from "../../administration/parametres/decret/create-update-decret/create-update-decret.component";
import {IDecretResponse} from "../../shared/models/decret.model";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {DecretService} from "../../administration/parametres/decret/service/decret.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {AgentComponent} from "../agent.component";
import {AjoutComponent} from "../ajout/ajout.component";
import {IAgentResponse} from "../../shared/models/agent.model";

// @ts-ignore
@Component({
  selector: 'app-liste',
  standalone: true,
    imports: [
        RouterLink,
        ButtonModule,
        ToastModule,
        TableModule,
        PaginatorModule
    ],
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.scss'
})
export class ListeComponent implements OnInit{

    first: number = 0;
    rows: number = 10;
    totalRecord = 0;
    page = 0;


    agents: Agent[];

    constructor(private agentService : AgentService,
                private router: Router,
                private dialogService: DialogService,
          //      private dialogRef: DynamicDialogRef,
          //      private messageService: MessageService,
          //      private confirmationService : ConfirmationService
    ) { }

    ngOnInit() {
        this.getAgents();
    }

    loadPage(event: PaginatorState) {
        this.page = event.page;
        this.rows = event.rows;
        this.getAgents();
    }


    /** Permet d'afficher un modal pour la modification */
    openModalAjoutAgent(): void {
        this.dialogService.open(AjoutComponent,
            {
                header: 'Ajouter un Agent',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                position:"Adding"
            }).onClose.subscribe(result => {
            if(result){
                // On actualise la liste des decrets
                // this.showMessage("success","Enregistrement a été effectué avec succès");
                this.getAgents();
            }
        });

    }


   //  Permet d'afficher un modal pour la modification
    openModalDecretEdit(agent: IAgentResponse): void {
        this.dialogService.open(CreateUpdateDecretComponent,
            {
                header: 'Modifier Agent',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: agent,
                position:"Editing"
            }).onClose.subscribe(result => {
            this.getAgents();
        });
    }



 /*   ajoutAgent():any{
        this.router.navigate(['ajout-agent'])
    }
*/
    detailAgent(id:number) {
        this.router.navigate(['details-agent', id]);
    }
/*
    updateAgent(id : number) {
        this.router.navigate(['update-agent', id]);
    }

 */

    deleteAgent(id) {
        this.agentService.deleteAgent(id).subscribe( data => {
            console.log(data);
            this.getAgents();
        })

    }

    private getAgents() {
        this.agentService.getAgentsList().subscribe(data => {
            this.agents = data;
        });
    }


}
