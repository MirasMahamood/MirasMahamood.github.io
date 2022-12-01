import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

import { UomService } from '../uom.service';

@Component({
  selector: 'app-create-edit-uom',
  templateUrl: './create-edit-uom.component.html',
  providers: [ MessageService ]
})
export class CreateEditUomComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    id: [''],
    symbol: ['', Validators.required],
    text: ['', Validators.required],
    longText: ['', Validators.required]
  });
  isAddMode: boolean = true;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private messageService: MessageService,
    private uomService: UomService) { }

  ngOnInit(): void {
    let uomId = this.route.snapshot.params['id'];
    this.isAddMode = !uomId
    if(!this.isAddMode) {
      this.getUomById(uomId)
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.isAddMode) {
      this.createUom();
    } else {
      this.updateUom();
    }
  }

  private createUom() {
    this.uomService.createUom(this.form.value).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'UOM created successfully'});
      this.submitted = false;
      this.form.reset();
    })
  }

  private getUomById(id: string) {
    this.uomService.getUomById(id).subscribe(response => {
      console.log(response.data);
      this.form.patchValue(response.data!)
    })
  }

  private updateUom() {
    this.submitted = true;
    this.uomService.updateUom(this.form.value).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Uom updated successfully'});
      this.submitted = false;
    })
  }

}
