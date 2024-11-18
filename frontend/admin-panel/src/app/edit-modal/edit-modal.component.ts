import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditModalComponent>, // Referencia para cerrar el modal
    @Inject(MAT_DIALOG_DATA) public data: any // Datos del curso recibido
  ) {}

  // Método para guardar los cambios y cerrar el modal
  saveChanges() {
    this.dialogRef.close(this.data); // Devuelve los datos editados
  }

  // Método para cerrar el modal sin guardar cambios
  closeDialog() {
    this.dialogRef.close(); // Solo cierra el modal
  }
}
