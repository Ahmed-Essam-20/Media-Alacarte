import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';

@Component({
  selector: 'app-solution',
  standalone: true,
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent implements AfterViewInit {
  constructor(private anim: ScrollAnimationsService) {}

  ngAfterViewInit() {
    this.anim.slideLeft('.banner');
    this.anim.fadeUp('.feature');
  }

  features = [
    {
      icon: '📊',
      title: 'Campaign Planning',
      desc: 'Plan and optimize your ad campaigns with data‑driven insights and seamless collaboration for maximum impact.'
    },
    {
      icon: '🛒',
      title: 'Media Buying',
      desc: 'Effortlessly book media slots with AI‑powered automation, ensuring cost efficiency and better reach.'
    },
    {
      icon: '🚀',
      title: 'Ad Distribution',
      desc: 'Distribute ads across multiple channels while ensuring precise targeting and real‑time tracking.',
      highlight: false
    },
    {
      icon: '📈',
      title: 'Performance Analytics',
      desc: 'Gain actionable insights with real‑time performance tracking to maximize ROI and refine future strategies.'
    }
  ];
}
