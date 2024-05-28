import {Component, Input, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import { RoleModel } from '../../../../shared/models/role.model';

@Component({
  selector: 'app-detail-role',
  templateUrl: './detail-role.component.html',
  styleUrls: ['./detail-role.component.scss']
})
export class DetailRoleComponent implements OnInit{
    role: RoleModel = new RoleModel();

    @Input() data: any;
    constructor(
        private dialogRef: DynamicDialogRef,
        private dynamicDialog:  DynamicDialogConfig,
    ) {}

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
           // this.role = cloneDeep(this.dynamicDialog.data);
            this.role = this.dynamicDialog.data;
        }
    }

    clear(): void {
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
}
