import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  dataSource: MatTableDataSource<User> = new MatTableDataSource([
    { 
      name: 'User1', // just a test user
      email: 'testuser@email.com',
      role: 'Dummy',
      sector: 'Test',
    },
  ]);
  displayedColumns: string[] = ['name', 'role', 'email', 'benefits', 'actions'];

  // users filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
