import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { ModelProcene } from 'src/app/models/model-procene';
import { ModelProceneService } from 'src/app/services/model-procene.service';
import { ModelProceneDialogComponent } from '../../dialogs/model-procene-dialog/model-procene-dialog.component';
import { OsobinaModela } from 'src/app/models/osobina-modela';
import { RowContext } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { ModelProceneMasterDetailComponent } from '../../masterDetails/model-procene-master-detail/model-procene-master-detail.component';

@Component({
  selector: 'app-model-procene',
  templateUrl: './model-procene.component.html',
  styleUrls: ['./model-procene.component.scss']
})
export class ModelProceneComponent implements AfterViewInit, OnInit {
  data: MatTableDataSource<ModelProcene>;
  isLoadingResults = true;
  displayedColumns = ['id','godina', 'opis', 'actions'];
  modelProceneMD: ModelProcene;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
 

  constructor(private modelProceneService: ModelProceneService, 
    public dialog: MatDialog, private router: Router){}

  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {

  }

  fillTable(): void {
    this.modelProceneService.getModelProcenes().subscribe(res => {
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

  public openDialog(flag: number, id: number, godina:number, opis: string) {
    const dialogRef = this.dialog.open(ModelProceneDialogComponent,{data: {id: id, godina: godina, opis: opis}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
       this.ngOnInit();
     }
  });
 }

//  public redirectToMasterDetail(ModelProcene) {
//    this.router.config.find(r => r.component == ModelProceneMasterDetailComponent).data = ModelProcene;
//    console.log(ModelProcene + 'model procene component!!!');
//  }
}
