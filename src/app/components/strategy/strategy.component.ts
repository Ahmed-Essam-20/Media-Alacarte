import { Component } from '@angular/core';
import { ScrollAnimationsService } from '../../shared/animations/scroll-animations.service';


@Component({
  selector: 'app-strategy',
  standalone: true,
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {

  constructor(private anim: ScrollAnimationsService) {}
ngAfterViewInit() {
  this.anim.fadeUp('.strategy-card');   // Example selector
}
}
