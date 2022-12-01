import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Uom } from '../uom';
import { UomService } from '../uom.service';

@Component({
  selector: 'app-uom-list',
  templateUrl: './uom-list.component.html',
  providers: [ConfirmationService, MessageService]
})
export class UomListComponent implements OnInit {

  uomList: Uom[] = [];

  constructor(
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    private uomService: UomService) { }

  ngOnInit(): void {
    this.getAllUoms();
  }

  getAllUoms() {
    this.uomService.getAllUoms().subscribe(response => {
      this.uomList = response.data;
    })
  }

  confirmDelete(event: Event, id: string) {
    this.confirmationService.confirm({
      target: (event.target) as HTMLButtonElement,
      message: 'Are you sure that you want to Delete?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteUom(id);
      },
      reject: () => {
        console.log("Rejected")
      }
    });
  }

  deleteUom(id: string) {
    this.uomService.deleteUom(id).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'UOM deleted successfully'});
      this.uomList = response.data;
    })
  }

}
