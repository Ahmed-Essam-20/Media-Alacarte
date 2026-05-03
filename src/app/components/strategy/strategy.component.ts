import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';

@Component({
  selector: 'app-strategy',
  standalone: true,
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements AfterViewInit {

  constructor(private anim: ScrollAnimationsService) {}

  ngAfterViewInit(): void {
    this.anim.fadeInOnScroll('.strategy-card');
  }
}
