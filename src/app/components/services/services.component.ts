import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
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
