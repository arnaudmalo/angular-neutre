import {Component, Input, OnInit} from '@angular/core';
import {Departement, DepartementModel} from "../../../../shared/models/departement.model";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-detail-departement',
  templateUrl: './detail-departement.component.html',
  styleUrls: ['./detail-departement.component.scss']
})
export class DetailDepartementComponent implements OnInit{
    departement: DepartementModel = new DepartementModel();

    @Input() data: any;
    constructor(
        private dialogRef: DynamicDialogRef,
        private dynamicDialog:  DynamicDialogConfig,
    ) {}

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
           // this.departement = cloneDeep(this.dynamicDialog.data);
            this.departement = this.dynamicDialog.data;
        }
    }

    clear(): void {
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
}
