import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-content',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './port-content.component.html',
  styleUrl: './port-content.component.css'
})
export class PortContentComponent implements OnInit {
  @Output() navigateToContact = new EventEmitter<void>();
  images = [
    'assets/Icons/angular.svg',
    'assets/Icons/typescript-color.svg',
    'assets/Icons/javascript-color.svg',
    'assets/Icons/html-color.svg',
    'assets/Icons/css-color.svg',
    'assets/Icons/nodejs.svg',
    'assets/Icons/material-ui-color.svg',
  ];

  currentIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
  navigateToSection(sectionId: string) {
    this.router.navigate(['/home'], { fragment: sectionId });
  }
}
