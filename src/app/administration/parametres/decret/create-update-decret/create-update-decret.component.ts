import { Component, OnInit, ViewChild } from '@angular/core';
import { DecretService } from '../service/decret.service';
import {DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DecretModel, IDecretModel } from '../../../../shared/models/decret.model';


@Component({
  selector: 'app-create-update-decret',
  templateUrl: './create-update-decret.component.html',
  styleUrls: ['./create-update-decret.component.scss']
})
export class CreateUpdateDecretComponent implements OnInit{
    @ViewChild('decretForm') form!: NgForm;
    decret: IDecretModel = new DecretModel();
    editing!:boolean

    constructor(
        public decretService: DecretService,
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
            this.decret = this.dynamicDialog.data;
        }

       /* if (this.dynamicDialog.data) {
            this.decret = this.dynamicDialog.data;
            console.warn("de",this.decret);
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
        console.warn("DECRET: ",this.decret);
        this.decretService.create(this.decret).subscribe({
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
        this.decretService.update(this.decret, this.dynamicDialog.data.id).subscribe({
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
