import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PortMenuComponent } from "../../port-menu/port-menu.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, MatIconModule, PortMenuComponent],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent implements OnInit {

  portfolioItems = [
    { 
      image: 'assets/Icons/linkedin mockup.jpg', 
      title: 'LinkedIn Clone', 
      tags: ['Angular', 'NextJs'], 
      description: 'A full-fledged LinkedIn clone with user authentication, job postings, and a sleek UI built with Angular and Next.js.' 
    },
    { 
      image: 'assets/Icons/gym mockup.avif', 
      title: 'Muscle Garage Portfolio', 
      tags: ['Angular', 'Material UI'], 
      description: 'A modern and dynamic fitness portfolio showcasing gym services, schedules, and client testimonials with Material UI.' 
    },
    { 
      image: 'assets/Icons/specch mockup.jpg', 
      title: 'Speech Emotion Recognition', 
      tags: ['Python', 'AI & ML'], 
      description: 'An AI-powered system that detects emotions from speech patterns, leveraging deep learning and NLP models.' 
    },
    { 
      image: 'assets/Icons/youtube mockup.jpg', 
      title: 'YouTube Clone', 
      tags: ['Angular', 'Spring Boot Java'], 
      description: 'A scalable YouTube-like video streaming platform with user authentication, video uploads, and real-time comments.' 
    }
  ];

  constructor() {}

  ngOnInit() {
   
  }
}
