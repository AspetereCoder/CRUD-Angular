import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user';

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
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    @Inject(MAT_DIALOG_DATA) public data: User
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

    // checks if the user wants do edit an user
    if (this.data && this.data.name) {
      this.fillForm();
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  saveUser() {
    if (!this.userForm.valid) {
      alert('Preencha os campos necessários.');
      return;
    }

    const userData = this.userForm.getRawValue();

    if (this.data && this.data.name) {
      // updates the user if it already exists
      const userId = this.data.firebaseId;

      this.usersService.updateUser(userId, userData).then((response) => {
        alert('Usuário editado com sucesso.');
        this.closeModal();
      }).catch(
        (error) => {
        alert('Ops! Algo inesperado aconteceu. Tente novamente mais tarde');
        console.error(error);
        }
      );
    } else {
      // adds the user if it doesn't exist

      this.usersService
        .addUser(userData)
        .then((response) => {
          // when the user is succesfully aded to the database
          alert('Usuário cadastrado com sucesso!');
          this.closeModal();
        })
        .catch((error) => {
          alert('Ops! Algo inesperado aconteceu. Tente novamente mais tarde');
          console.error(error);
        });
    }
  }

  // fills the form with the already existing user data
  fillForm() {
    this.userForm.patchValue({
      ...this.data,
    });
  }
}
