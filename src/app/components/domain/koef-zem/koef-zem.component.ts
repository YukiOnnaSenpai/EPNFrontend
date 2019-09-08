import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { KoefZem } from 'src/app/models/koef-zem';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { KoefZemService } from 'src/app/services/koef-zem.service';
import { NamenaZem } from 'src/app/models/namena-zem';
import { ModelProcene } from 'src/app/models/model-procene';
import { KoefZemDialogComponent } from '../../dialogs/koef-zem-dialog/koef-zem-dialog.component';

@Component({
  selector: 'app-koef-zem',
  templateUrl: './koef-zem.component.html',
  styleUrls: ['./koef-zem.component.scss']
})
export class KoefZemComponent implements AfterViewInit,OnInit {
  data: MatTableDataSource<KoefZem>;
  isLoadingResults = true;
  displayedColumns = ['id','model', 'namena', 'stopa', 'cena', 'actions'];

  @Input() dataToRender: number;
  @Input() type: boolean;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private koefZemService: KoefZemService, 
    public dialog: MatDialog){}

  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {
  }

  ngOnChanges(){
    if(this.dataToRender)
      this.fillTable();
  }

  fillTable(): void {
    console.log(this.type);
    if(this.type) {
      this.koefZemService.getKoefZemByModelProcene(this.dataToRender).subscribe(res => {
        this.data = new MatTableDataSource<KoefZem>(res);
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
    } else {

      this.koefZemService.getKoefZemByNamenaZem(this.dataToRender).subscribe(res => {
        this.data = new MatTableDataSource<KoefZem>(res);
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

    }
  }

  public openDialog(flag: number, id: number, model: ModelProcene, namena: NamenaZem, stopa: number, cena:number) {
    const dialogRef = this.dialog.open(KoefZemDialogComponent, {
      data: { id: id, model: model, namena: namena, stopa: stopa, cena: cena, type:this.type}
    });
    dialogRef.componentInstance.flag = flag;
    if(flag == 1)
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.ngOnInit();
      }
    });
  }

}
