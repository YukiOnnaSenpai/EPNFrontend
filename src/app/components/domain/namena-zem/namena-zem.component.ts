import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { NamenaZem } from 'src/app/models/namena-zem';
import { NamenaZemService } from 'src/app/services/namena-zem.service';
import { NamenaZemDialogComponent } from '../../dialogs/namena-zem-dialog/namena-zem-dialog.component';

@Component({
  selector: 'app-namena-zem',
  templateUrl: './namena-zem.component.html',
  styleUrls: ['./namena-zem.component.scss']
})
export class NamenaZemComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  data: MatTableDataSource<NamenaZem>;
  isLoadingResults = true;
  displayedColumns = ['id', 'opis', 'actions'];
 
  constructor(private namenaZemService: NamenaZemService, public dialog: MatDialog){}


  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {
  }

  fillTable(): void {
    this.namenaZemService.getNamenaZems().subscribe(res => {
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

  public openDialog(flag: number, id: number, opis:string) {
    const dialogRef = this.dialog.open(NamenaZemDialogComponent,{data: {id: id, opis: opis}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
       this.ngOnInit();
     }
  });
 }
}
