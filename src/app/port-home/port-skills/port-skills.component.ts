import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-port-skills',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatCardModule],
  templateUrl: './port-skills.component.html',
  styleUrl: './port-skills.component.css'
})
export class PortSkillsComponent {
  skills: string[] = ['Angular', 'React', 'AngularJs', 'TypeScript', 'Javascript', 'HTML', 'CSS', 'SCSS/SASS', 'Redux', 'RxJs', 'Web Devevlopment', 'Front-End Development', 'GIT', 'JIRA'];
  
  experience = [
    { role: 'Software Engineer', 
      company: 'Prodapt Solutions', 
      date: 'Oct 2023 – Present',
      href: 'https://www.prodapt.com/'
    },
    { 
      role: 'Associate Software Engineer', 
      company: 'Prodapt Solutions', 
      date: 'Oct 2021 – Sept 2023',
      href: 'https://www.prodapt.com/'
    },
    { 
      role: 'Intern', 
      company: 'HexenBit', 
      date: 'May 2021 – Aug 2021',
      href: ''
    }
  ];

  displayedColumns: string[] = ['role', 'company', 'date'];
}