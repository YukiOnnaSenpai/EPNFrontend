import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { OsobinaModela } from 'src/app/models/osobina-modela';
import { OsobinaModelaService } from 'src/app/services/osobina-modela.service';
import { ModelProcene } from 'src/app/models/model-procene';
import { OsobinaModelaDialogComponent } from '../../dialogs/osobina-modela-dialog/osobina-modela-dialog.component';

@Component({
  selector: 'app-osobina-modela',
  templateUrl: './osobina-modela.component.html',
  styleUrls: ['./osobina-modela.component.scss']
})
export class OsobinaModelaComponent implements AfterViewInit,OnInit {
  dataMultiple: MatTableDataSource<OsobinaModela>;
  isLoadingResults = true;
  displayedColumns = ['id', 'naziv', 'model', 'vrednost', 'actions'];

  @Input() dataToRender: number;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

 constructor(private osobinaModelaService: OsobinaModelaService, 
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
      this.osobinaModelaService.getOsobinaModelaByModelProcene(this.dataToRender).subscribe(res => {
      this.dataMultiple = new MatTableDataSource<OsobinaModela>(res);
      console.log(this.dataMultiple);
      this.isLoadingResults = false;
      this.dataMultiple.paginator = this.paginator;
      this.dataMultiple.sort = this.sort;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public openDialog(flag: number, id: number, model: ModelProcene, naziv: string, vrednost: string) {
    const dialogRef = this.dialog.open(OsobinaModelaDialogComponent, {
      data: { id: id, model:model, naziv: naziv, vrednost: vrednost}
    });
    dialogRef.componentInstance.flag = flag;
    if(flag == 1)
    //dialogRef.componentInstance.data.id = this.modelToRender;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.ngOnInit();
      }
    });
  }

}
