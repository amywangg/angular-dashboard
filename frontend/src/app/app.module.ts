import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// third party modules
import { DataTablesModule } from 'angular-datatables';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { ChartsModule } from 'ng2-charts';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule,
} from '@angular/material';
import { FilesComponent } from './components/settings/files/files.component';
import { FilesAddComponent } from './components/settings/files-add/files-add.component';
import { FilesListComponent } from './components/settings/files-list/files-list.component';
import { FilesEditComponent } from './components/settings/files-edit/files-edit.component';
import { FileService } from './services/file.service';
import { LoginBarComponent } from './components/analytics/login-bar/login-bar.component';
import { MethodComponent } from './components/performance/method/method.component';
import { CoreLogsComponent } from './components/home/core-logs/core-logs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertsComponent,
    AnalyticsComponent,
    SettingsComponent,
    PerformanceComponent,
    FilesComponent,
    FilesAddComponent,
    FilesListComponent,
    FilesEditComponent,
    FileSelectDirective,
    LoginBarComponent,
    MethodComponent,
    CoreLogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    DataTablesModule,
    ChartsModule, 
    MatMenuModule,
    NgbPaginationModule, NgbAlertModule, NgbModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
