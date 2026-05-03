import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  standalone: true,
  templateUrl: './stats-bar.component.html',
  styleUrls: ['./stats-bar.component.scss']
})
export class StatsBarComponent {
  stats = [
    { value: '110+', label: 'Top Agencies Trust Media LaCarte' },
    { value: '1M', label: 'Advertisers Reaching the Right Audience' },
    { value: '98.99%', label: 'Seamless Media Transactions for Owners' }
  ];
}
