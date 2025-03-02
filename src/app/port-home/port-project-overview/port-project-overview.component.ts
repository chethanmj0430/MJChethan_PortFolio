import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ProjectDetailsComponent } from "./project-details/project-details.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-project-overview',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatChipListbox, MatIconModule, ProjectDetailsComponent, CommonModule],
  templateUrl: './port-project-overview.component.html',
  styleUrl: './port-project-overview.component.css'
})
export class PortProjectOverviewComponent {
  projects = [
    { img: 'assets/Icons/linkedin mockup.jpg', tech1: 'Angular', tech2: 'Next.js' },
    { img: 'assets/Icons/youtube mockup.jpg', tech1: 'Angular', tech2: 'Spring Boot Java' },
    { img: 'assets/Icons/gym mockup.avif', tech1: 'Angular', tech2: 'Material UI' },
    { img: 'assets/Icons/specch mockup.jpg', tech1: 'Python', tech2: 'AI & ML' }
  ];
  
  currentIndex = 0;
  currentProject = this.projects[this.currentIndex];
  openProject: boolean = false;

  constructor(private router: Router) {
    
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.projects.length;
      this.currentProject = this.projects[this.currentIndex];
    }, 3000);
  }

  projectDetails() {
    this.router.navigate(['/projects']);
  }
}
