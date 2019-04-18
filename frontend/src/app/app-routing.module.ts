import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { PerformanceComponent } from './components/performance/performance.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FilesComponent } from './components/settings/files/files.component';
import { FilesAddComponent } from './components/settings/files-add/files-add.component';
import { FilesListComponent } from './components/settings/files-list/files-list.component';
import { FilesEditComponent } from './components/settings/files-edit/files-edit.component';

import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'alerts', component: AlertsComponent },
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: 'files', component: FilesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

