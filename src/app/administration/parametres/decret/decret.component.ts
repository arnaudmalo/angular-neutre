import {Component, OnInit, ViewChild} from '@angular/core';
import { CreateUpdateDecretComponent } from './create-update-decret/create-update-decret.component';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { DecretService } from './service/decret.service';

import {DetailDecretComponent} from "./detail-decret/detail-decret.component";
import {Table} from "primeng/table";
import {FilterCriteria} from "../../../shared/models/filterCriteria";
import { Decret, DecretModel, IDecretResponse } from '../../../shared/models/decret.model';
import {PaginatorState} from "primeng/paginator";


interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
@Component({
  selector: 'app-decret',
  templateUrl: './decret.component.html',
  styleUrls: ['./decret.component.scss']
})


export class DecretComponent implements OnInit{

    decrets!:any // [{region:'Centre',province:'Kadiogo',code: "11", libelle: "Ouagadougou", etat: "Actif"},{region:'Centre-Ouest',province:'Boulkiemdé',code: "05", libelle: "Koudougou",etat: "Actif"}];
    decretInServer!: Decret;
    isDialogOpInProgress!: boolean;
    selectedDecret: Decret = new Decret();
    @ViewChild('dt') dt: Table | undefined;
    filterCriteria: FilterCriteria = new FilterCriteria();
    messages: Message[] | undefined;

    first: number = 0;
    rows: number = 10;
    totalRecord = 0;
    page = 0;

    message: any;
    timeoutHandle: any;

    constructor(

        private dialogService: DialogService,
        private dialogRef: DynamicDialogRef,
        private router: Router,
        private decretService: DecretService,
        private messageService: MessageService,
        private confirmationService : ConfirmationService,
    ) {

    }

    /*Afficher la liste des decrets à l'initiation*/
    ngOnInit(): void {
        this.getAllDecrets();
    }
    /** Permet d'afficher un modal pour la modification */
    openModalDecret(): void {
        this.dialogService.open(CreateUpdateDecretComponent,
            {
                header: 'Ajouter un décret',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                position:"Adding"
            }).onClose.subscribe(result => {
            if(result){
                // On actualise la liste des decrets
                this.showMessage("success","Enregistrement a été effectué avec succès");
                this.getAllDecrets();
            }
        });

    }


    /* Permet d'afficher un modal pour la modification */
    openModalDecretEdit(decret: IDecretResponse): void {
        this.dialogService.open(CreateUpdateDecretComponent,
            {
                header: 'Modifier Décret',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: decret,
                position:"Editing"
            }).onClose.subscribe(result => {
            this.showMessage("success","Modification a été effectuée avec succès");
            this.getAllDecrets();
        });
    }


    /* Permet d'afficher un message lorsqu'on selectionne une ligne dans le tableau*/

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Décret sélectionné', detail: event.data.libelle });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Décret déselectionné', detail: event.data.libelle });
    }



    getAllDecrets() {
        const request = {
            pageNo: this.page,
            pageSize: this.rows,
        };

      this.decretService.getAllDecretWithPaginationCriteria(this.filterCriteria,request).subscribe({
            next: response => {
                if (response.body !== null) {
                    console.warn("decret lengh",response.body)
                    this.decretInServer = response.body!;
                    this.totalRecord = this.decretInServer.page?.totalElements!;
                    this.decrets = this.decretInServer._embedded?.content;

                }
            },
            error: error => {
                const message = error.error.detail ? error.error.detail : `Une erreur est survenue lors de la récupération des decrets !`;
            }
        });

    }


    loadPage(event: PaginatorState) {
        this.page = event.page;
        this.rows = event.rows;
        this.getAllDecrets();
    }

    onDelete(decret: DecretModel) {
        this.confirmationService.confirm({
            message: 'Etes-vous sur de vouloir supprimer ce exemple?',
            accept: () => {
            this.delete(decret);
            }
        });
    }

    delete(selection: any) {
        this.decretService.delete(selection.id).subscribe(() => {
            this.showMessage("success","La suppression a été effectuée avec succès");
            this.messages = [{ severity: 'success', summary: 'Success', detail: 'La suppression a été effectuée avec succès' }];
            this.getAllDecrets();
        },(error) => { console.error("Decret "+JSON.stringify(error));
            this.showMessage("error","Une erreure est survenue lors de la suppression");
            });
    }


    openModalDetail(decret: DecretModel): void {
        this.dialogService.open(DetailDecretComponent,
            {
                header: 'Détails décret',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                data: decret
            });
    }


    resetFilter() {
        this.filterCriteria = new FilterCriteria();
        this.getAllDecrets();
    }

    showMessage(type:string,titre: string) {
        this.messages = [{ severity: type, summary: 'Success', detail: titre }]
        this.timeoutHandle = setTimeout(() => {
            this.messages = undefined;
        }, 2000);
    }
}
