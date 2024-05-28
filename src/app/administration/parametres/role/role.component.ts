import {Component, OnInit, ViewChild} from '@angular/core';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Router } from '@angular/router';

import {Table} from "primeng/table";
import {FilterCriteria} from "../../../shared/models/filterCriteria";
import { IRoleResponse, Role, RoleModel } from '../../../shared/models/role.model';
import { RoleService } from './service/role.service';
import { CreateUpdateRoleComponent } from './create-update-role/create-update-role.component';
import { DetailRoleComponent } from './detail-role/detail-role.component';

interface PageEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})


export class RoleComponent implements OnInit{

    roles!:any // [{region:'Centre',province:'Kadiogo',code: "11", libelle: "Ouagadougou", etat: "Actif"},{region:'Centre-Ouest',province:'Boulkiemdé',code: "05", libelle: "Koudougou",etat: "Actif"}];
    roleInServer!: Role;
    isDialogOpInProgress!: boolean;
    selectedRole: Role = new Role();
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
        private roleService: RoleService,
        private messageService: MessageService,
        private confirmationService : ConfirmationService,
    ) {

    }

    /*Afficher la liste des roles à l'initiation*/
    ngOnInit(): void {
        this.getAllRoles();
    }
    /** Permet d'afficher un modal pour la modification */
    openModalRole(): void {
        this.dialogService.open(CreateUpdateRoleComponent,
            {
                header: 'Ajouter un role',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                position:"Adding"
            }).onClose.subscribe(result => {
            if(result){
                // On actualise la liste des roles
                this.showMessage("success","Enregistrement a été effectué avec succès");
                this.getAllRoles();
            }
        });

    }
    

    /* Permet d'afficher un modal pour la modification */
    openModalRoleEdit(role: IRoleResponse): void {
        this.dialogService.open(CreateUpdateRoleComponent,
            {
                header: 'Modifier Département',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                closable: true,
                data: role,
                position:"Editing"
            }).onClose.subscribe(result => {
            this.showMessage("success","Modification a été effectuée avec succès");
            this.getAllRoles();
        });
    }


    /* Permet d'afficher un message lorsqu'on selectionne une ligne dans le tableau*/

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Role sélectionné', detail: event.data.libelle });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Role déselectionné', detail: event.data.libelle });
    }



    getAllRoles() {
        const request = {
            pageNo: this.page,
            pageSize: this.rows,
        };

      this.roleService.getAllRoleWithPaginationCriteria(this.filterCriteria,request).subscribe({
            next: response => {
                if (response.body !== null) {
                    console.warn("role lengh",response.body)
                    this.roleInServer = response.body!;
                    this.totalRecord = this.roleInServer.page?.totalElements!;
                    this.roles = this.roleInServer._embedded?.content;

                }
            },
            error: error => {
                const message = error.error.detail ? error.error.detail : `Une erreur est survenue lors de la récupération des roles !`;
            }
        });

    }


    loadPage(event: PageEvent) {
        this.page = event.page;
        this.rows = event.rows;
        this.getAllRoles();
    }

    onDelete(role: RoleModel) {
        this.confirmationService.confirm({
            message: 'Etes-vous sur de vouloir supprimer ce exemple?',
            accept: () => {
            this.delete(role);
            }
        });
    }

    delete(selection: any) {
        this.roleService.delete(selection.id).subscribe(() => {
            this.showMessage("success","La suppression a été effectuée avec succès");
            this.messages = [{ severity: 'success', summary: 'Success', detail: 'La suppression a été effectuée avec succès' }];
            this.getAllRoles();
        },(error) => { console.error("Role "+JSON.stringify(error));
            this.showMessage("error","Une erreure est survenue lors de la suppression");
            });
    }


    openModalDetail(role: RoleModel): void {
        this.dialogService.open(DetailRoleComponent,
            {
                header: 'Détails role',
                width: '60%',
                contentStyle: { overflow: 'auto' },
                baseZIndex: 10000,
                maximizable: true,
                data: role
            });
    }


    resetFilter() {
        this.filterCriteria = new FilterCriteria();
        this.getAllRoles();
    }

    showMessage(type:string,titre: string) {
        this.messages = [{ severity: type, summary: 'Success', detail: titre }]
        this.timeoutHandle = setTimeout(() => {
            this.messages = undefined;
        }, 2000);
    }
}
