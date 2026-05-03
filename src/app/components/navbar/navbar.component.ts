import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isScrolled = false;
  activeLink = 'The Platform';

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
  }

  setActive(link: string) {
    this.activeLink = link;
  }
}
