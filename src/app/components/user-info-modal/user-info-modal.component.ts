import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrl: './user-info-modal.component.scss'
})
export class UserInfoModalComponent {
  userData: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.userData = data;
    console.log("Dados recebidos: ", data);
  }


}
