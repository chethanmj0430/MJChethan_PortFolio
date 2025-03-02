import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-port-menu',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatListModule, RouterModule],
  templateUrl: './port-menu.component.html',
  styleUrl: './port-menu.component.css'
})

export class PortMenuComponent {
  isMenuOpen = false;
  @Output() navigateToSkills = new EventEmitter<void>();
  @Output() navigateToContact = new EventEmitter<void>();


  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  homePage() {
    this.router.navigate(['/home']);
  }

projectPage() {
    this.router.navigate(['/projects']);
    console.log("team")
  }

  scrollToSkills() {
    this.navigateToSkills.emit();
  }

  scrollToContact() {
    this.navigateToContact.emit();
  }

  navigateToSection(sectionId: string) {
    this.router.navigate(['/home'], { fragment: sectionId });
  }
}
