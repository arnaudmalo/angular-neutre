import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService, SharedModule } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-ifu-table',
  templateUrl: './acte-table.component.html',
  styleUrls: ['./acte-table.component.scss'],
})
export class ActeTableComponent implements OnInit{
    @Input() data!:any
    isDialogOpInProgress!: boolean;
    @Input() selected: any;
    @Input() columns: String[] = [];
    @Input() selectedItem: any;

    first: number = 0;
    rows: number = 10;
    @Input() totalRecord = 0;
    page = 0;

    message: any;
    timeoutHandle: any;
    @Output() onLoadPage = new EventEmitter();
    @Output() onEdit = new EventEmitter();
    @Output() onDelete = new EventEmitter();

    constructor(
        private dialogService: DialogService,
        private messageService: MessageService,
        private confirmationService : ConfirmationService
    ) {

    }
    ngOnInit(): void {
    }

    onRowSelect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Selection effectuée avec succès', detail: event.data.libelle });
    }

    onRowUnselect(event: any) {
        this.messageService.add({ severity: 'info', summary: 'Déselection effectuée avec succès', detail: event.data.libelle });
    }

    loadPage() {
        this.onLoadPage.emit();
    }

    edit() {
        this.onEdit.emit();
    }

    _delete() {
        this.onDelete.emit();
    }
}
