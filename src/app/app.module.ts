import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MaterialModule } from '../app/material.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/utils/about/about.component';
import { KontoComponent } from './components/domain/konto/konto.component';
import { ModelProceneComponent } from './components/domain/model-procene/model-procene.component';
import { NamenaZemComponent } from './components/domain/namena-zem/namena-zem.component';
import { SrezComponent } from './components/domain/srez/srez.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { ElementProceneZemDialogComponent } from './components/dialogs/element-procene-zem-dialog/element-procene-zem-dialog.component';
import { KatastarskaOpstinaDialogComponent } from './components/dialogs/katastarska-opstina-dialog/katastarska-opstina-dialog.component';
import { KoefZemDialogComponent } from './components/dialogs/koef-zem-dialog/koef-zem-dialog.component';
import { KontoDialogComponent } from './components/dialogs/konto-dialog/konto-dialog.component';
import { ModelProceneDialogComponent } from './components/dialogs/model-procene-dialog/model-procene-dialog.component';
import { NamenaZemDialogComponent } from './components/dialogs/namena-zem-dialog/namena-zem-dialog.component';
import { OsobinaModelaDialogComponent } from './components/dialogs/osobina-modela-dialog/osobina-modela-dialog.component';
import { ParametarProceneZemDialogComponent } from './components/dialogs/parametar-procene-zem-dialog/parametar-procene-zem-dialog.component';
import { ParcelaZonaDialogComponent } from './components/dialogs/parcela-zona-dialog/parcela-zona-dialog.component';
import { RataZemDialogComponent } from './components/dialogs/rata-zem-dialog/rata-zem-dialog.component';
import { SrezDialogComponent } from './components/dialogs/srez-dialog/srez-dialog.component';
import { TekstResenjaDialogComponent } from './components/dialogs/tekst-resenja-dialog/tekst-resenja-dialog.component';
import { TipZaduzenjaDialogComponent } from './components/dialogs/tip-zaduzenja-dialog/tip-zaduzenja-dialog.component';
import { VrednostZemDialogComponent } from './components/dialogs/vrednost-zem-dialog/vrednost-zem-dialog.component';
import { ZaduzenjeZemDialogComponent } from './components/dialogs/zaduzenje-zem-dialog/zaduzenje-zem-dialog.component';
import { ZemljisteDialogComponent } from './components/dialogs/zemljiste-dialog/zemljiste-dialog.component';
import { KontoService } from './services/konto.service';
import { ModelProceneService } from './services/model-procene.service';
import { NamenaZemService } from './services/namena-zem.service';
import { SrezService } from './services/srez.service';
import { OsobinaModelaComponent } from './components/domain/osobina-modela/osobina-modela.component';
import { OsobinaModelaService } from './services/osobina-modela.service';
import { ModelProceneMasterDetailComponent } from './components/masterDetails/model-procene-master-detail/model-procene-master-detail.component';
import { KoefZemComponent } from './components/domain/koef-zem/koef-zem.component';
import { ElementProceneZemComponent } from './components/domain/element-procene-zem/element-procene-zem.component';
import { KoefZemService } from './services/koef-zem.service';
import { ElementProceneZemService } from './services/element-procene-zem.service';
import { NamenaZemMasterDetailComponent } from './components/masterDetails/namena-zem-master-detail/namena-zem-master-detail.component';
import { ZemljisteComponent } from './components/domain/zemljiste/zemljiste.component';
import { ZemljisteService } from './services/zemljiste.service';

const Routes = [
  {path: 'modelProcene/modelProceneMasterDetail/:id', component: ModelProceneMasterDetailComponent},
  {path: 'namenaZem/namenaZemMasterDetail/:id', component: NamenaZemMasterDetailComponent},
  {path: 'konto', component: KontoComponent},
  {path: 'modelProcene', component: ModelProceneComponent},
  {path: 'namenaZem', component: NamenaZemComponent},
  {path: 'srez', component: SrezComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    KontoComponent,
    ModelProceneComponent,
    NamenaZemComponent,
    SrezComponent,
    ElementProceneZemDialogComponent,
    KatastarskaOpstinaDialogComponent,
    KoefZemDialogComponent,
    KontoDialogComponent,
    ModelProceneDialogComponent,
    NamenaZemDialogComponent,
    OsobinaModelaDialogComponent,
    ParametarProceneZemDialogComponent,
    ParcelaZonaDialogComponent,
    RataZemDialogComponent,
    SrezDialogComponent,
    TekstResenjaDialogComponent,
    TipZaduzenjaDialogComponent,
    VrednostZemDialogComponent,
    ZaduzenjeZemDialogComponent,
    ZemljisteDialogComponent,
    OsobinaModelaComponent,
    ModelProceneMasterDetailComponent,
    KoefZemComponent,
    ElementProceneZemComponent,
    NamenaZemMasterDetailComponent,
    ZemljisteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(Routes),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  entryComponents: [
    KontoDialogComponent,
    ModelProceneDialogComponent,
    NamenaZemDialogComponent,
    SrezDialogComponent,
    OsobinaModelaDialogComponent,
    KoefZemDialogComponent,
    ElementProceneZemDialogComponent,
    ZemljisteDialogComponent,
  ],
  providers: [KontoService, ModelProceneService, NamenaZemService, SrezService, OsobinaModelaService, KoefZemService, ElementProceneZemService, ZemljisteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
