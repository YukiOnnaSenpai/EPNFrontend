import { Component, OnInit, AfterViewInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { Zemljiste } from 'src/app/models/zemljiste';
import { ZemljisteService } from 'src/app/services/zemljiste.service';
import { ZemljisteDialogComponent } from '../../dialogs/zemljiste-dialog/zemljiste-dialog.component';
import { NamenaZem } from 'src/app/models/namena-zem';
import { KatastarskaOpstina } from 'src/app/models/katastarska-opstina';

@Component({
  selector: 'app-zemljiste',
  templateUrl: './zemljiste.component.html',
  styleUrls: ['./zemljiste.component.scss']
})
export class ZemljisteComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  data: MatTableDataSource<Zemljiste>;
  isLoadingResults = true;
  displayedColumns = ['id', 'povrsina', 'knjigVr', 'napomena', 'katBroj', 'katPodbroj', 'katDeoParcele', 'katPotes', 'namenaZem', 'katastarskaOpstina','actions'];

  @Input() dataToRender: number;

  constructor(private zemljisteService: ZemljisteService, public dialog: MatDialog) { }

  ngOnInit() {
    this.fillTable();
  }

  ngAfterViewInit() {
  }

  fillTable(): void {
    this.zemljisteService.getZemljisteByNamenaZem(this.dataToRender).subscribe(res => {
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

  public openDialog(flag: number, id: number, povrsina: number,  knjigVr:number, napomena: string, katBroj: number, katPodbroj: number, katDeoParcele: number,katPotes: string, namenaZem: NamenaZem, katastarskaOpstina: KatastarskaOpstina) {
    const dialogRef = this.dialog.open(ZemljisteDialogComponent,{data: {id: id, povrsina: povrsina, knjigVr:knjigVr, napomena:napomena, katBroj:katBroj, katPodbroj:katPodbroj, katDeoParcele:katDeoParcele, katPotes:katPotes, namenaZem:namenaZem, katastarskaOpstina:katastarskaOpstina}});
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result == 1) {
       this.ngOnInit();
     }
  });
 }

}
