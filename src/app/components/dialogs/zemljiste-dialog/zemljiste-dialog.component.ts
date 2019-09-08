import { Component, OnInit, Inject } from '@angular/core';
import { Zemljiste } from 'src/app/models/zemljiste';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ZemljisteService } from 'src/app/services/zemljiste.service';

@Component({
  selector: 'app-zemljiste-dialog',
  templateUrl: './zemljiste-dialog.component.html',
  styleUrls: ['./zemljiste-dialog.component.scss']
})
export class ZemljisteDialogComponent implements OnInit {
  public flag: number;
  zemljistes: Zemljiste[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<ZemljisteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Zemljiste, 
    public zemljisteService: ZemljisteService) { }

  ngOnInit() {
  }

  public add(): void {
    this.zemljisteService.createZemljiste(this.data).subscribe();
    this.snackBar.open("Uspesno dodato zemljiste", "OK", { duration: 2500 });
  }

  public update(): void {
    this.zemljisteService.updateZemljiste(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjeno zemljiste", "OK", { duration: 2500 });
  }

  public delete(): void {
    this.zemljisteService.deleteZemljiste(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisano zemljiste", "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
