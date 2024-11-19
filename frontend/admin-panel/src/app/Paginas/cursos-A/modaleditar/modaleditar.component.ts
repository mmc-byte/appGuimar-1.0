import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog'; // Importar MatDialogModule
import { MatButtonModule } from '@angular/material/button'; // Importar MatButtonModule
import { MatIconModule } from '@angular/material/icon'; // Importar MatIconModule
import { MatCardModule } from '@angular/material/card'; // Importar MatCardModule

@Component({
  selector: 'app-modaleditar',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCardModule], // Incluir MatCardModule
  templateUrl: './modaleditar.component.html',
  styleUrls: ['./modaleditar.component.css'],
})
export class ModalEditarComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal() {
    this.dialogRef.close();
  }

  saveChanges() {
    console.log('Cambios guardados');
    this.dialogRef.close();
  }
}
