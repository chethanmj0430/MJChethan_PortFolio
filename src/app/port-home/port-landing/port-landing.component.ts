import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-port-landing',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './port-landing.component.html',
  styleUrl: './port-landing.component.css'
})
export class PortLandingComponent {
@Output() navigateToContact = new EventEmitter<void>();
constructor(private router: Router) {}

navigateToSection(sectionId: string) {
  this.router.navigate(['/home'], { fragment: sectionId });
}
}
