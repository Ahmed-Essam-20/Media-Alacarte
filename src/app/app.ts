import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreloaderComponent } from './components/preloader/preloader.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, PreloaderComponent,BackToTopComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {}
