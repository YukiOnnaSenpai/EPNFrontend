import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { ModelProcene } from 'src/app/models/model-procene';
import { ModelProceneService } from 'src/app/services/model-procene.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-model-procene-master-detail',
  templateUrl: './model-procene-master-detail.component.html',
  styleUrls: ['./model-procene-master-detail.component.scss']
})
export class ModelProceneMasterDetailComponent implements OnInit {
  public showOsobinaParam: boolean = false;
  public showKoefParam: boolean = false;
  public showElementParam: boolean = false;
  data: ModelProcene;
  isLoadingResults = true;
  public id: number;
  public opis: string;
  displayedColumns = ['godina', 'id', 'opis', 'actions'];

  @Input() modelProcene: ModelProcene;

  constructor(private modelProceneService: ModelProceneService, 
    public dialog: MatDialog, private router: Router){}

  ngOnInit() {
     this.id = Number(this.router.url.split("/")[3]);
     this.fillFields();
  }

  fillFields(): void {
    this.modelProceneService.getModelProcene(this.id).subscribe(res => {
      this.data = res;
      this.opis = this.data.opis;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

  public showOsobina() {
    this.showOsobinaParam = !this.showOsobinaParam;
  }

  public showKoef() {
    this.showKoefParam = !this.showKoefParam;
  }
  public showElement() {
    this.showElementParam = !this.showElementParam;
  }
}
