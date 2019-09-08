import { Component, OnInit, Inject } from '@angular/core';
import { ElementProceneZem } from 'src/app/models/element-procene-zem';
import { ModelProcene } from 'src/app/models/model-procene';
import { ElementProceneZemService } from 'src/app/services/element-procene-zem.service';
import { ModelProceneService } from 'src/app/services/model-procene.service';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-element-procene-zem-dialog',
  templateUrl: './element-procene-zem-dialog.component.html',
  styleUrls: ['./element-procene-zem-dialog.component.scss']
})
export class ElementProceneZemDialogComponent implements OnInit {
public flag: number;
elementProceneZems: ElementProceneZem[];
modeli: ModelProcene[];

constructor(public snackBar: MatSnackBar, 
  public dialogRef: MatDialogRef<ElementProceneZemDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: ElementProceneZem, 
  public modelProceneService: ModelProceneService,
  public elementProceneZemService: ElementProceneZemService) { }

  ngOnInit() {
    this.modelProceneService.getModelProcenes().subscribe( modeli => 
      this.modeli = modeli);
  }

  public CompareTo(a,b){
    return a.id == b.id;
  }

  public add(): void {
    this.elementProceneZemService.createElementProceneZem(this.data).subscribe();
    this.snackBar.open("Uspesno dodat koeficijent zemljista : " + this.data.id, "OK", { duration: 2500 });
  }

  public update(): void {
    this.elementProceneZemService.updateElementProceneZem(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjen koeficijent zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.elementProceneZemService.deleteElementProceneZem(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisan koeficijent zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
