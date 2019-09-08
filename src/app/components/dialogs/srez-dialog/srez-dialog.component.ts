import { Component, OnInit, Inject } from '@angular/core';
import { Srez } from 'src/app/models/srez';
import { SrezService } from 'src/app/services/srez.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-srez-dialog',
  templateUrl: './srez-dialog.component.html',
  styleUrls: ['./srez-dialog.component.scss']
})
export class SrezDialogComponent implements OnInit {
  public flag: number;
  srezs: Srez[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<SrezDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Srez, 
    public srezService: SrezService) { }

  ngOnInit() {
  }

  public add(): void {
    this.srezService.createSrez(this.data).subscribe();
    this.snackBar.open("Uspesno dodat srez: " + this.data.naziv, "OK", { duration: 2500 });
  }

  public update(): void {
    this.srezService.updateSrez(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjen srez: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.srezService.deleteSrez(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisan srez: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
