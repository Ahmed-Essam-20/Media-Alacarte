import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({ providedIn: 'root' })
export class ScrollAnimationsService {

  fadeInOnScroll(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%'
        }
      });
    });
  }

  slideFromLeftOnScroll(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });
  }

  slideFromRightOnScroll(selector: string) {
    gsap.utils.toArray(selector).forEach((el: any) => {
      gsap.from(el, {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });
  }
}
