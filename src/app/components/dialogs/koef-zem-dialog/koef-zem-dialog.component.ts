import { Component, OnInit, Inject } from '@angular/core';
import { KoefZem } from 'src/app/models/koef-zem';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KoefZemService } from 'src/app/services/koef-zem.service';
import { ModelProcene } from 'src/app/models/model-procene';
import { ModelProceneService } from 'src/app/services/model-procene.service';
import { NamenaZemService } from 'src/app/services/namena-zem.service';
import { NamenaZem } from 'src/app/models/namena-zem';

@Component({
  selector: 'app-koef-zem-dialog',
  templateUrl: './koef-zem-dialog.component.html',
  styleUrls: ['./koef-zem-dialog.component.scss']
})
export class KoefZemDialogComponent implements OnInit {
  public flag: number;
  public type: boolean;
  koefZems: KoefZem[];
  modeli: ModelProcene[];
  namene: NamenaZem[];

  constructor(public snackBar: MatSnackBar, 
    public dialogRef: MatDialogRef<KoefZemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: KoefZem, 
    public modelProceneService: ModelProceneService,
    public namenaZemService: NamenaZemService,
    public koefZemService: KoefZemService) { }


  ngOnInit() {
    console.log() + '   TYPED';
    this.modelProceneService.getModelProcenes().subscribe( modeli => 
      this.modeli = modeli);
    this.namenaZemService.getNamenaZems().subscribe( namene =>
      this.namene = namene);
  }

  public CompareTo(a,b){
    return a.id == b.id;
  }

  public add(): void {
    this.koefZemService.createKoefZem(this.data).subscribe();
    this.snackBar.open("Uspesno dodat koeficijent zemljista : " + this.data.id, "OK", { duration: 2500 });
  }

  public update(): void {
    this.koefZemService.updateKoefZem(this.data).subscribe();
    this.snackBar.open("Uspesno izmenjen koeficijent zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public delete(): void {
    this.koefZemService.deleteKoefZem(this.data.id).subscribe();
    this.snackBar.open("Uspesno obrisan koeficijent zemljista: " + this.data.id, "OK", { duration: 2500 });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.snackBar.open("Odustani", "OK", { duration: 1000 });
  }

}
