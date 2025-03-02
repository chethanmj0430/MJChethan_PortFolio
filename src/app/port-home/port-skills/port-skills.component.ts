import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-port-skills',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './port-skills.component.html',
  styleUrl: './port-skills.component.css'
})
export class PortSkillsComponent {
  skills: string[] = ['Angular', 'React', 'AngularJs', 'TypeScript', 'Javascript', 'HTML', 'CSS', 'SCSS/SASS', 'Redux', 'RxJs', 'Web Devevlopment', 'Front-End Development', 'GIT', 'JIRA'];
  
  experience = [
    { role: 'Software Engineer', company: 'Prodapt Solutions', date: 'October 2023 – Present' },
    { role: 'Associate Software Engineer', company: 'Prodapt Solutions', date: 'October 2021 – September 2023' },
    { role: 'Intern', company: 'HexenBit', date: 'May 2021 – Aug 2021' }
  ];

  displayedColumns: string[] = ['role', 'company', 'date'];
}