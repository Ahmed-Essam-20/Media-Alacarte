import { Component } from '@angular/core';

@Component({
  selector: 'app-footer2',
  standalone: true,
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component {
  year = new Date().getFullYear();
}
