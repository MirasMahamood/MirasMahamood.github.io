import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';

import { UserService } from '../user.service';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  providers: [ MessageService ]
})
export class CreateEditUserComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
    proofId: ['', Validators.required],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    designation: [''],
    phone: [null, [Validators.min(1000000000), Validators.max(9999999999)]],
    email: ['', [Validators.required, Validators.email]],
    organization: [''],
    image: ['']
  });
  isAddMode: boolean = true;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute,
    private messageService: MessageService,
    private userService: UserService) { }

  ngOnInit(): void {
    let userId = this.route.snapshot.params['id'];
    this.isAddMode = !userId
    if(!this.isAddMode) {
      this.getUserById(userId)
    }
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    if(this.isAddMode) {
      this.createUser();
    } else {
      this.updateUser();
    }
  }

  private createUser() {
    this.userService.createUser(this.form.value).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'User created successfully'});
      this.submitted = false;
      this.form.reset();
    })
  }

  private getUserById(id: string) {
    this.userService.getUserById(id).subscribe(response => {
      console.log(response.data);
      this.form.patchValue(response.data!)
    })
  }

  private updateUser() {
    this.submitted = true;
    this.userService.updateUser(this.form.value).subscribe(response => {
      this.messageService.add({severity:'success', summary: 'Success', detail: 'User updated successfully'});
      this.submitted = false;
    })
  }

}
