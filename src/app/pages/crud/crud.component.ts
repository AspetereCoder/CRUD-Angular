import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['name', 'role', 'email', 'benefits', 'actions'];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    return this.usersService.getAllUsers().subscribe({
      next: (response: User[]) => {
        // shows the users from firebase db on the screen
        this.dataSource = new MatTableDataSource(response);
      },
      error: (err) => {
        console.log("Erro:", err);
      }
    });
  }

  // users filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
