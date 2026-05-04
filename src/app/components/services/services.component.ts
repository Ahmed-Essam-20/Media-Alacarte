import { Component } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  constructor(private anim: ScrollAnimationsService) {}

ngAfterViewInit() {
  this.anim.fadeUp('.service-card');   // Example selector
}

  services = [
    {
      title: 'Advertisers',
      image: 'assets/media/service-1.jpg',
      label: 'Advertisers'
    },
    {
      title: 'Agencies',
      image: 'assets/media/service-2.jpg',
      label: 'Agencies'
    },
    {
      title: 'Media Owners',
      image: 'assets/media/service-3.jpg',
      label: 'Media Owners'
    }
  ];
}
