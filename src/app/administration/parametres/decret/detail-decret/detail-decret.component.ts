import {Component, Input, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import { DecretModel } from '../../../../shared/models/decret.model';

@Component({
  selector: 'app-detail-decret',
  templateUrl: './detail-decret.component.html',
  styleUrls: ['./detail-decret.component.scss']
})
export class DetailDecretComponent implements OnInit{
    decret: DecretModel = new DecretModel();

    @Input() data: any;
    constructor(
        private dialogRef: DynamicDialogRef,
        private dynamicDialog:  DynamicDialogConfig,
    ) {}

    ngOnInit(): void {
        if (this.dynamicDialog.data) {
           // this.decret = cloneDeep(this.dynamicDialog.data);
            this.decret = this.dynamicDialog.data;
        }
    }

    clear(): void {
        this.dialogRef.close();
        this.dialogRef.destroy();
    }
}
