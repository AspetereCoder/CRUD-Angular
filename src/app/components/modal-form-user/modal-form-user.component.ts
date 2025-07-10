import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-form-user',
  templateUrl: './modal-form-user.component.html',
  styleUrl: './modal-form-user.component.scss',
})
export class ModalFormUserComponent {
  userForm: FormGroup;
  healthPlansList = [
    {
      id: 1,
      description: 'Copper',
    },
    {
      id: 2,
      description: 'Silver',
    },
    {
      id: 3,
      description: 'Gold',
    },
  ];
  dentalPlansList = [
    {
      id: 1,
      description: 'Cooper',
    },
    {
      id: 2,
      description: 'Silver',
    },
    {
      id: 3,
      description: 'Gold',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<ModalFormUserComponent>,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      sector: [null, [Validators.required, Validators.minLength(2)]],
      role: [null, [Validators.required, Validators.minLength(5)]],
      healthPlan: [''],
      dentalPlan: [''],
    });
  }

  closeModal() {
    this.dialogRef.close();
  }
}
