import { Component } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent {
  constructor(private anim: ScrollAnimationsService) {}

ngAfterViewInit() {
  this.anim.fadeUp('.stats-bar');   // Example selector
}

  stats = [
    { value: '110+', label: 'Top Agencies Trust Media LaCarte' },
    { value: '1M', label: 'Advertisers Reaching the Right Audience' },
    { value: '98.99%', label: 'Seamless Media Transactions for Owners' }
  ];
}
