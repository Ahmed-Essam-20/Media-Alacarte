import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
//import { ServicesSectionComponent } from '../../components/services/services.component';
import { PortfolioComponent } from '../../components/portfolio/portfolio.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { RibbonComponent } from '../../components/ribbon/ribbon.component';
import { ServicesComponent } from '../../components/services/services.component';
import { SolutionComponent } from '../../components/solution/solution.component';
import { StatsBarComponent } from '../../components/stats-bar/stats-bar.component';
import { OrbitComponent } from '../../components/orbit/orbit.component';
import { Footer2Component } from '../../components/footer2/footer2.component';
import { StrategyComponent } from '../../components/strategy/strategy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RibbonComponent,
    ServicesComponent,
    SolutionComponent,
    StatsBarComponent,
    OrbitComponent,
    StrategyComponent,
    Footer2Component,
    //ServicesSectionComponent,
    PortfolioComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
}
