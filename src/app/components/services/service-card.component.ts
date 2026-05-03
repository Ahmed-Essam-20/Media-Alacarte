import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-service-card',
  standalone: true,
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements AfterViewInit {
  @Input() title!: string;
  @Input() description!: string;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement, {
      opacity: 0,
      y: 30,
      duration: 1,
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: "top 85%"
      }
    });
  }
}
