import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartementService } from '../service/departement.service';
import {DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { DepartementModel, IDepartementModel } from '../../../../shared/models/departement.model';

@Component({
  selector: 'app-create-update-departement',
  templateUrl: './create-update-departement.component.html',
  styleUrls: ['./create-update-departement.component.scss']
})
export class CreateUpdateDepartementComponent implements OnInit{
    @ViewChild('departementForm') form!: NgForm;
    departement: IDepartementModel = new DepartementModel();
    editing!:boolean

    constructor(
        public departementService: DepartementService,
        private dialogRef: DynamicDialogRef,
        private dynamicDialog:  DynamicDialogConfig,
    ){

    }
    ngOnInit() {

        this.dynamicDialog.position == "Editing"?this.editing=true:this.editing =false
        if(this.dynamicDialog.position == "Editing"){
            console.log(this.dynamicDialog.data)
        }
        if (this.dynamicDialog.data) {
            this.departement = this.dynamicDialog.data;
        }

       /* if (this.dynamicDialog.data) {
            this.departement = this.dynamicDialog.data;
            console.warn("de",this.departement);
        }*/
    }

    clear() {
        this.form.resetForm();
        this.dialogRef.close();
        this.dialogRef.destroy();

    }

    isEditing(editing:boolean) {
        if (editing == true) {
            return true;
        }
        return false;
    }

    saveEntity() {
        console.warn("DEPARTEMENT: ",this.departement);
        this.departementService.create(this.departement).subscribe({
            next: (response) => {
                this.dialogRef.close(response);
                this.dialogRef.destroy();
            },
            error: (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            },
        });
    }

    editEntity() {
        this.departementService.update(this.departement, this.dynamicDialog.data.id).subscribe({
            next: (response) => {
                this.dialogRef.close(response);
                this.dialogRef.destroy();
            },
            error: (error: HttpErrorResponse) => {
                console.log(error.name + ' ' + error.message);
            },
        });
    }

}
