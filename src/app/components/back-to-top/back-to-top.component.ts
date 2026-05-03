import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent {
  visible = false;

  @HostListener('window:scroll')
  onScroll() {
    this.visible = window.scrollY > 500;
  }

  goUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
