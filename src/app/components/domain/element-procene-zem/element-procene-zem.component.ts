import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { ElementProceneZem } from 'src/app/models/element-procene-zem';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ElementProceneZemService } from 'src/app/services/element-procene-zem.service';
import { ModelProcene } from 'src/app/models/model-procene';
import { ElementProceneZemDialogComponent } from '../../dialogs/element-procene-zem-dialog/element-procene-zem-dialog.component';

@Component({
  selector: 'app-element-procene-zem',
  templateUrl: './element-procene-zem.component.html',
  styleUrls: ['./element-procene-zem.component.scss']
})
export class ElementProceneZemComponent implements AfterViewInit,OnInit {
  dataMultiple: MatTableDataSource<ElementProceneZem>;
  data: ElementProceneZem;
  isLoadingResults = true;
  displayedColumns = ['id','opis', 'koef', 'model', 'actions'];

  @Input() dataToRender: number;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(private elementProceneZemService: ElementProceneZemService, 
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
    this.elementProceneZemService.getElementProceneZemByModelProcene(this.dataToRender).subscribe(res => {
      this.dataMultiple = new MatTableDataSource<ElementProceneZem>(res);
      console.log(this.dataMultiple);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public openDialog(flag: number, id: number, opis: string, koef:number, model: ModelProcene) {
    const dialogRef = this.dialog.open(ElementProceneZemDialogComponent, {
      data: { id: id, opis: opis, koef: koef, model: model}
    });
    dialogRef.componentInstance.flag = flag;
    if(flag == 1)
    dialogRef.componentInstance.data.id = this.dataToRender;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
        this.ngOnInit();
      }
    });
  }

}
