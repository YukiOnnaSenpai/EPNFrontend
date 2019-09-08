import { Component, OnInit, Input } from '@angular/core';
import { NamenaZem } from 'src/app/models/namena-zem';
import { NamenaZemService } from 'src/app/services/namena-zem.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-namena-zem-master-detail',
  templateUrl: './namena-zem-master-detail.component.html',
  styleUrls: ['./namena-zem-master-detail.component.scss']
})
export class NamenaZemMasterDetailComponent implements OnInit {
  public showKoefZemParam: boolean = false;
  public showZemParam: boolean = false;
  data: NamenaZem;
  public id: number;
  public opis: string;
  isLoadingResults = true;

  constructor(private namenaZemService: NamenaZemService, 
    public dialog: MatDialog, private router: Router){}

  ngOnInit() {
    this.id = Number(this.router.url.split("/")[3]);
    this.fillFields();
  }

  fillFields(): void {
    this.namenaZemService.getNamenaZem(this.id).subscribe(res => {
      this.data = res;
      this.opis = this.data.opis;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public showKoefZem() {
    this.showKoefZemParam = !this.showKoefZemParam;
  }

  public showZem() {
    this.showZemParam = !this.showZemParam;
  }

}
