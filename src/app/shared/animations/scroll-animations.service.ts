import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({ providedIn: 'root' })
export class ScrollAnimationsService {

  fadeUp(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      });
    });
  }

  slideLeft(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      });
    });
  }

  slideRight(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        }
      });
    });
  }
}
