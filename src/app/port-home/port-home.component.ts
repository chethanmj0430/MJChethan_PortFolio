import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { PortMenuComponent } from "./port-menu/port-menu.component";
import { PortLandingComponent } from './port-landing/port-landing.component';
import { PortContentComponent } from './port-content/port-content.component';
import { PortAboutComponent } from "./port-about/port-about.component";
import { PortProjectOverviewComponent } from "./port-project-overview/port-project-overview.component";
import { PortSkillsComponent } from "./port-skills/port-skills.component";
import { PortFooterComponent } from "./port-footer/port-footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-home',
  standalone: true,
  imports: [PortMenuComponent, PortLandingComponent, PortContentComponent, PortAboutComponent, PortAboutComponent, PortProjectOverviewComponent, PortSkillsComponent, PortFooterComponent],
  templateUrl: './port-home.component.html',
  styleUrl: './port-home.component.css'
})
export class PortHomeComponent implements AfterViewInit {

  @ViewChild('skillsSection', { static: false }) skillsSection!: ElementRef;
  @ViewChild('contactSection', { static: false }) contactSection!: ElementRef;

  skills: string[] = [
    'Angular', 'UI Design', 'Framer', 'Branding', 
    'Animations', 'Interaction Design', 'Webflow', 
    'UX Research', 'Front-End Development', 'No-Code', 'Figma'
  ];

  experience = [
    { role: 'UX/UI Designer', company: 'PixelCraft Studios', duration: 'May 2018 – Dec 2019' },
    { role: 'Frontend Developer', company: 'BrightWave Technologies', duration: 'March 2016 – April 2017' },
    { role: 'Graphic Designer', company: 'VistaWorks Agency', duration: 'June 2019 – Aug 2021' }
  ];

  displayedColumns: string[] = ['role', 'company', 'duration'];
  
  constructor(private router: Router) {}

  ngAfterViewInit() {
    console.log('skillsSection:', this.skillsSection);
    console.log('skillsSection:', this.contactSection);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['/home'], { fragment: sectionId });
      console.warn(`${sectionId} not found.`);
    }
  }
}
