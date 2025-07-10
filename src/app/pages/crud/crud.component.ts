import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../interfaces/user';
import { UsersService } from '../../services/users.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormUserComponent } from '../../components/modal-form-user/modal-form-user.component';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss',
})
export class CrudComponent {
  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = [
    'id',
    'name',
    'role',
    'email',
    'benefits',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private usersService: UsersService, public dialog: MatDialog) {}

  ngOnInit() {
    this.getUsersList();
  }

  // initialize the paginator and sort functionality
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getUsersList() {
    return this.usersService.getAllUsers().subscribe({
      next: (response: User[]) => {
        // shows the users from firebase db on the screen
        this.dataSource = new MatTableDataSource(response);
        console.log(response);
        // reload the paginator
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.paginator._intl.itemsPerPageLabel = "Itens por página:";
      },
      error: (err) => {
        console.log('Erro:', err);
      },
    });
  }

  deleteUser(userId: string) {
    this.usersService
      .deleteUser(userId)
      .then((response: any) => {
        window.alert('Usuário excluido com sucesso.');
      })
      .catch(() => {
        window.alert('Erro ao excluir o usuário.');
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

  // Modals

  openAddUserModal() {
    this.dialog
      .open(ModalFormUserComponent, {
        width: '700px',
        height: '400px',
      })
      .afterClosed()
      .subscribe(() => this.getUsersList());
  }

  openEditUserModal(user: User) {
    this.dialog
      .open(ModalFormUserComponent, {
        width: '700px',
        height: '400px',
        data: user
      })
      .afterClosed()
      .subscribe(() => this.getUsersList());
  }
}
