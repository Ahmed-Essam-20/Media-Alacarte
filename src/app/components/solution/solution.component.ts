import { Component } from '@angular/core';

@Component({
  selector: 'app-solution',
  standalone: true,
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.scss']
})
export class SolutionComponent {

  features = [
    {
      title: "Campaign Planning",
      desc: "Plan and optimize your ad campaigns with data-driven insights and seamless collaboration for maximum impact.",
      icon: "📊"
    },
    {
      title: "Media Buying",
      desc: "Effortlessly book media slots with AI-powered automation, ensuring cost efficiency and better reach.",
      icon: "🛒"
    },
    {
      title: "Ad Distribution",
      desc: "Distribute ads across multiple channels while ensuring precise targeting and real-time tracking.",
      icon: "🚀",
      highlight: false
    },
    {
      title: "Performance Analytics",
      desc: "Monitor performance insights to maximize your ROI and refine future strategies.",
      icon: "📈"
    }
  ];

}
