import { Component, OnInit, Inject } from '@angular/core';
import { NamenaZem } from 'src/app/models/namena-zem';
import { NamenaZemService } from 'src/app/services/namena-zem.service';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-namena-zem-dialog',
  templateUrl: './namena-zem-dialog.component.html',
  styleUrls: ['./namena-zem-dialog.component.scss']
})
export class NamenaZemDialogComponent implements OnInit {
  public flag: number;
  namenaZems: NamenaZem[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<NamenaZemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: NamenaZem, 
    public namenaZemService: NamenaZemService) { }


  ngOnInit() {
  }

  public add(): void {
    this.namenaZemService.createNamenaZem(this.data).subscribe();
    this.snackBar.open("Uspesno dodata namena zemljista: " + this.data.opis, "OK", { duration: 2500 });
  }

  public update(): void {
    this.namenaZemService.updateNamenaZem(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjena namena zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.namenaZemService.deleteNamenaZem(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisana namena zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
