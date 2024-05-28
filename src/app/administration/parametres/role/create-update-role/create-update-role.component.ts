import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../service/role.service';
import {DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { IRoleModel, RoleModel } from '../../../../shared/models/role.model';


@Component({
  selector: 'app-create-update-role',
  templateUrl: './create-update-role.component.html',
  styleUrls: ['./create-update-role.component.scss']
})
export class CreateUpdateRoleComponent implements OnInit{
    @ViewChild('roleForm') form!: NgForm;
    role: IRoleModel = new RoleModel();
    editing!:boolean

    constructor(
        public roleService: RoleService,
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
            this.role = this.dynamicDialog.data;
        }

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
        console.warn("ROLE: ",this.role);
        this.roleService.create(this.role).subscribe({
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
        this.roleService.update(this.role, this.dynamicDialog.data.id).subscribe({
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
