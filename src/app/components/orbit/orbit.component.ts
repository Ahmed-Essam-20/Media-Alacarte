import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-orbit',
  standalone: true,
  templateUrl: './orbit.component.html',
  styleUrls: ['./orbit.component.scss']
})
export class OrbitComponent implements AfterViewInit {

  avatars = [
    '/assets/media/orbit-avatar-1.png',
    '/assets/media/orbit-avatar-2.jpg',
    '/assets/media/orbit-avatar-3.avif',
    '/assets/media/orbit-avatar-4.avif',
    '/assets/media/orbit-avatar-5.avif',
    '/assets/media/orbit-avatar-6.avif',
    '/assets/media/orbit-avatar-7.avif'
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const items = this.el.nativeElement.querySelectorAll('.avatar');
    gsap.from(items, {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }
}
