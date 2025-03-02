import { Routes } from '@angular/router';
import { PortProjectOverviewComponent } from './port-home/port-project-overview/port-project-overview.component';
import { ProjectDetailsComponent } from './port-home/port-project-overview/project-details/project-details.component';
import { PortHomeComponent } from './port-home/port-home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: PortHomeComponent },
    { path: 'projects', component: ProjectDetailsComponent },
  ];
  