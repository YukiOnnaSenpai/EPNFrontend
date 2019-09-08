import { Component, OnInit, Inject } from '@angular/core';
import { OsobinaModela } from 'src/app/models/osobina-modela';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { OsobinaModelaService } from 'src/app/services/osobina-modela.service';
import { ModelProceneService } from 'src/app/services/model-procene.service';
import { ModelProcene } from 'src/app/models/model-procene';

@Component({
  selector: 'app-osobina-modela-dialog',
  templateUrl: './osobina-modela-dialog.component.html',
  styleUrls: ['./osobina-modela-dialog.component.scss']
})
export class OsobinaModelaDialogComponent implements OnInit {
  public flag: number;
  osobinaModelas: OsobinaModela[];
  modeli: ModelProcene[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<OsobinaModelaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OsobinaModela, 
    public modelProceneService: ModelProceneService,
    public osobinaModelaService: OsobinaModelaService) { }

  ngOnInit() {
    this.modelProceneService.getModelProcenes().subscribe( modeli => 
      this.modeli = modeli);
  }

  public CompareTo(a,b){
    return a.id == b.id;
  }

  public add(): void {
    console.log("Podaci " + this.data);
    this.osobinaModelaService.createOsobinaModela(this.data).subscribe();
    this.snackBar.open("Uspesno dodata osobina modela id : " + this.data.id, "OK", { duration: 2500 });
  }

  public update(): void {
    this.osobinaModelaService.updateOsobinaModela(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjena osobina modela: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.osobinaModelaService.deleteOsobinaModela(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisana osobina modela: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
