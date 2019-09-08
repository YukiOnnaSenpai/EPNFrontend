import { Component, OnInit, Inject } from '@angular/core';
import { Konto } from 'src/app/models/konto';
import { KontoService } from 'src/app/services/konto.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-konto-dialog',
  templateUrl: './konto-dialog.component.html',
  styleUrls: ['./konto-dialog.component.scss']
})
export class KontoDialogComponent implements OnInit {
  public flag: number;
  kontos: Konto[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<KontoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Konto, 
    public kontoService: KontoService) { }


  ngOnInit() {
  }

  public add(): void {
    this.kontoService.createKonto(this.data).subscribe();
    this.snackBar.open("Uspesno dodat konto: " + this.data.naziv, "OK", { duration: 2500 });
  }

  public update(): void {
    this.kontoService.updateKonto(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjen konto: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.kontoService.deleteKonto(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisan konto: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
