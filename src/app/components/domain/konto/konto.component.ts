import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
// import { KontoDataSource, KontoItem } from './konto-datasource';
import { Konto } from 'src/app/models/konto';
import { KontoService } from 'src/app/services/konto.service';
import { KontoDialogComponent } from '../../dialogs/konto-dialog/konto-dialog.component';

@Component({
  selector: 'app-konto',
  templateUrl: './konto.component.html',
  styleUrls: ['./konto.component.scss']
})
export class KontoComponent implements AfterViewInit, OnInit {
  data: MatTableDataSource<Konto>;
  isLoadingResults = true;
  displayedColumns = ['id', 'naziv', 'racun', 'actions'];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  constructor(private kontoService: KontoService, public dialog: MatDialog){}


  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {

  }

  fillTable(): void {
    this.kontoService.getKontos().subscribe(res => {
      this.data = new MatTableDataSource(res);
      console.log(this.data);
      this.isLoadingResults = false;
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public openDialog(flag: number, id: number, naziv:string, racun: string) {
    const dialogRef = this.dialog.open(KontoDialogComponent,{data: {id: id, naziv: naziv, racun: racun}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
       this.ngOnInit();
     }
  });
 }
}
