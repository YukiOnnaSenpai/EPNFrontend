import { Component, OnInit, Inject } from '@angular/core';
import { ModelProcene } from 'src/app/models/model-procene';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModelProceneService } from 'src/app/services/model-procene.service';

@Component({
  selector: 'app-model-procene-dialog',
  templateUrl: './model-procene-dialog.component.html',
  styleUrls: ['./model-procene-dialog.component.scss']
})
export class ModelProceneDialogComponent implements OnInit {
  public flag: number;
  modelProcenes: ModelProcene[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<ModelProceneDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModelProcene, 
    public modelProceneService: ModelProceneService) { }


  ngOnInit() {
  }

  public add(): void {
    this.modelProceneService.createModelProcene(this.data).subscribe();
    this.snackBar.open("Uspesno dodat model procene za godinu : " + this.data.godina, "OK", { duration: 2500 });
  }

  public update(): void {
    this.modelProceneService.updateModelProcene(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjen model procene: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.modelProceneService.deleteModelProcene(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisan model procene: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
