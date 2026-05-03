import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  standalone: true,
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {
  loading = true;

  ngOnInit() {
    gsap.to('.preloader-logo', {
      opacity: 1,
      scale: 1.1,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });

    setTimeout(() => {
      this.loading = false;
    }, 1800);
  }
}
