import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';

@Component({
  selector: 'app-services3',
  standalone: true,
  templateUrl: './services3.component.html',
  styleUrls: ['./services3.component.scss']
})
export class Services3Component implements AfterViewInit {

  constructor(private anim: ScrollAnimationsService) {}

  ngAfterViewInit(): void {
    this.anim.fadeInOnScroll('.service-card');
  }

  services = [
    {
      title: "Advertisers",
      img: "/assets/media/service-1.jpg",
      labelColor: "var(--primary-pink)"
    },
    {
      title: "Agencies",
      img: "/assets/media/service-2.jpg",
      labelColor: "var(--secondary-red)"
    },
    {
      title: "Media Owners",
      img: "/assets/media/service-3.jpg",
      labelColor: "#ff3366"
    }
  ];
}
