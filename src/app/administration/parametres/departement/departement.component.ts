import {Component, OnInit, ViewChild} from '@angular/core';
import { CreateUpdateDepartementComponent } from './create-update-departement/create-update-departement.component';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';
import { DepartementService } from './service/departement.service';

import {DetailDepartementComponent} from "./detail-departement/detail-departement.component";
import {Table} from "primeng/table";
import {FilterCriteria} from "../../../shared/models/filterCriteria";
import { Departement, DepartementModel, IDepartementResponse } from '../../../shared/models/departement.model';
import {PaginatorState} from "primeng/paginator";


interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})


export class DepartementComponent implements OnInit{

    departements!:any // [{region:'Centre',province:'Kadiogo',code: "11", libelle: "Ouagadougou", etat: "Actif"},{region:'Centre-Ouest',province:'Boulkiemdé',code: "05", libelle: "Koudougou",etat: "Actif"}];
    departementInServer!: Departement;
    isDialogOpInProgress!: boolean;
    selectedDepartement: Departement = new Departement();
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
        private departementService: DepartementService,
        private messageService: MessageService,
        private confirmationService : ConfirmationService,
    ) {

    }

    /*Afficher la liste des provinces à l'initiation*/
    ngOnInit(): void {
        this.getAllDepartements();
    }
    /** Permet d'afficher un modal pour la modification */
    openModalDepartement(): void {
        this.dialogService.open(CreateUpdateDepartementComponent,
            {
                header: 'Ajouter un département',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                position:"Adding"
            }).onClose.subscribe(result => {
            if(result){
                // On actualise la liste des regions
                this.showMessage("success","Enregistrement a été effectué avec succès");
                this.getAllDepartements();
            }
        });

    }


    /* Permet d'afficher un modal pour la modification */
    openModalDepartementEdit(departement: IDepartementResponse): void {
        this.dialogService.open(CreateUpdateDepartementComponent,
            {
                header: 'Modifier Département',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: departement,
                position:"Editing"
            }).onClose.subscribe(result => {
            this.showMessage("success","Modification a été effectuée avec succès");
            this.getAllDepartements();
        });
    }


    /* Permet d'afficher un message lorsqu'on selectionne une ligne dans le tableau*/

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Département sélectionné', detail: event.data.libelle });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Département déselectionné', detail: event.data.libelle });
    }



    getAllDepartements() {
        const request = {
            pageNo: this.page,
            pageSize: this.rows,
        };

      this.departementService.getAllDepartementWithPaginationCriteria(this.filterCriteria,request).subscribe({
            next: response => {
                if (response.body !== null) {
                    console.warn("departement lengh",response.body)
                    this.departementInServer = response.body!;
                    this.totalRecord = this.departementInServer.page?.totalElements!;
                    this.departements = this.departementInServer._embedded?.content;

                }
            },
            error: error => {
                const message = error.error.detail ? error.error.detail : `Une erreur est survenue lors de la récupération des departements !`;
            }
        });

       /* this.departementService.getAllDepartementWithPagination(request).subscribe(
            {
                next: (result) => {
                    if(result && result.body) {
                        this.departementInServer = result.body!;
                        this.totalRecord = this.departementInServer.page?.totalElements!;
                        console.log( this.departementInServer )                  // console.log(result.body._embedded);
                        this.departements = this.departementInServer._embedded?.content;
                    }
                },
                error: error => {
                    const message = error.error.detail ? error.error.detail : `Une erreur est survenue lors de la récupération des departements !`;
                }
            });*/

    }


    loadPage(event: PaginatorState) {
        this.page = event.page;
        this.rows = event.rows;
        this.getAllDepartements();
    }

    onDelete(departement: DepartementModel) {
        this.confirmationService.confirm({
            message: 'Etes-vous sur de vouloir supprimer ce exemple?',
            accept: () => {
            this.delete(departement);
            }
        });
    }

    delete(selection: any) {
        this.departementService.delete(selection.id).subscribe(() => {
            this.showMessage("success","La suppression a été effectuée avec succès");
            this.messages = [{ severity: 'success', summary: 'Success', detail: 'La suppression a été effectuée avec succès' }];
            this.getAllDepartements();
        },(error) => { console.error("Departement "+JSON.stringify(error));
            this.showMessage("error","Une erreure est survenue lors de la suppression");
            });
    }


    openModalDetail(departement: DepartementModel): void {
        this.dialogService.open(DetailDepartementComponent,
            {
                header: 'Détails département',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                data: departement
            });
    }


    resetFilter() {
        this.filterCriteria = new FilterCriteria();
        this.getAllDepartements();
    }

    showMessage(type:string,titre: string) {
        this.messages = [{ severity: type, summary: 'Success', detail: titre }]
        this.timeoutHandle = setTimeout(() => {
            this.messages = undefined;
        }, 2000);
    }
}
