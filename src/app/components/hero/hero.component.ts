import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('title', { static: true }) title!: ElementRef;
  @ViewChild('subtitle', { static: true }) subtitle!: ElementRef;
  @ViewChild('tagline', { static: true }) tagline!: ElementRef;
  @ViewChild('image', { static: true }) image!: ElementRef;
  @ViewChild('btn', { static: true }) btn!: ElementRef;

  ngAfterViewInit() {
    gsap.from([this.tagline.nativeElement, this.title.nativeElement, this.subtitle.nativeElement, this.btn.nativeElement], {
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out'
    });

    gsap.from(this.image.nativeElement, {
      opacity: 0,
      scale: 0.9,
      delay: 0.8,
      duration: 1,
      ease: 'power3.out'
    });
  }
}
