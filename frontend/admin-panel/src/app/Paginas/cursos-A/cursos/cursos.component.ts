import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator'; // Asegúrate de importar MatPaginator
import { MatTableDataSource } from '@angular/material/table'; // Asegúrate de importar MatTableDataSource
import { MatTableModule } from '@angular/material/table'; // Importar MatTableModule
import { MatPaginatorModule } from '@angular/material/paginator'; // Importar MatPaginatorModule
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule
import { MatDialog } from '@angular/material/dialog'; // Importar MatDialog
import { ModalEditarComponent } from '../modaleditar/modaleditar.component'; // Importar el componente ModalEditarComponent

@Component({
  selector: 'app-cursos',
  styleUrls: ['./cursos.component.css'],
  templateUrl: './cursos.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    ModalEditarComponent, // Asegúrate de importar el componente ModalEditarComponent
  ],  // Asegúrate de que estos módulos estén importados
})
export default class CursosComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'nombre', 'edad', 'docente', 'numClases', 'editar'];

  data = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, docente: 'Sí', numClases: 12 },
    { id: 2, nombre: 'Ana Gómez', edad: 25, docente: 'No', numClases: 8 },
    { id: 3, nombre: 'Carlos Díaz', edad: 40, docente: 'Sí', numClases: 15 },
    { id: 4, nombre: 'Laura Fernández', edad: 35, docente: 'Sí', numClases: 10 },
    { id: 3, nombre: 'Carlos Díaz', edad: 40, docente: 'Sí', numClases: 15 },
    { id: 3, nombre: 'Carlos Díaz', edad: 40, docente: 'Sí', numClases: 15 },
    { id: 3, nombre: 'Carlos Díaz', edad: 40, docente: 'Sí', numClases: 15 },
    { id: 3, nombre: 'Carlos Díaz', edad: 40, docente: 'Sí', numClases: 15 }
  ];

  dataSource = new MatTableDataSource<any>(this.data); // Usamos MatTableDataSource para manejar los datos de la tabla
  searchText: string = ''; // Campo de búsqueda

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(public dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; // Aseguramos que la paginación se aplique después de la vista inicializada
  }

  // Filtro para la búsqueda
  applyFilter() {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const filterValue = filter.trim().toLowerCase();
      return data.id.toString().includes(filterValue) || data.nombre.toLowerCase().includes(filterValue);
    };
    this.dataSource.filter = this.searchText; // Aplicamos el filtro
  }

  // Método para manejar la acción de "Editar"
  editar(id: number) {
    // Abre el modal de edición y pasa el ID del curso
    const dialogRef = this.dialog.open(ModalEditarComponent, {
      width: '700px', // Ajusta el tamaño del modal
      data: { id: id } // Pasar el ID del curso al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El modal se cerró', result);
    });
  }
}
