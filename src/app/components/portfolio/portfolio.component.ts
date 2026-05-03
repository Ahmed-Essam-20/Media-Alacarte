import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-portfolio-section',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {

  portfolioItems = [
    { title: 'Commercial Shoot', image: '[picsum.photos](https://picsum.photos/600/400?1)' },
    { title: 'Product Photography', image: '[picsum.photos](https://picsum.photos/600/400?2)' },
    { title: 'Event Coverage', image: '[picsum.photos](https://picsum.photos/600/400?3)' },
    { title: '3D Animation Demo', image: '[picsum.photos](https://picsum.photos/600/400?4)' },
    { title: 'Brand Identity', image: '[picsum.photos](https://picsum.photos/600/400?5)' },
    { title: 'Short Film', image: '[picsum.photos](https://picsum.photos/600/400?6)' }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const cards = this.el.nativeElement.querySelectorAll('.portfolio-card');

    gsap.from(cards, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%'
      }
    });
  }
}
