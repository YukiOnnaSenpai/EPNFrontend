import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { Srez } from 'src/app/models/srez';
import { SrezService } from 'src/app/services/srez.service';
import { SrezDialogComponent } from '../../dialogs/srez-dialog/srez-dialog.component';

@Component({
  selector: 'app-srez',
  templateUrl: './srez.component.html',
  styleUrls: ['./srez.component.scss']
})
export class SrezComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  data: MatTableDataSource<Srez>;
  isLoadingResults = true;
  displayedColumns = ['id', 'naziv', 'actions'];

  constructor(private srezService: SrezService, public dialog: MatDialog){}

  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {

  }

  fillTable() : void {
    this.srezService.getSrezs().subscribe(res => {
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

  public openDialog(flag: number, id: number, naziv:string) {
    const dialogRef = this.dialog.open(SrezDialogComponent,{data: {id: id, naziv: naziv}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
       this.ngOnInit();
     }
  });
 }
}
