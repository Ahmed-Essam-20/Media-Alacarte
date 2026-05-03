import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
ScrollTrigger.normalizeScroll(true);

bootstrapApplication(AppComponent, appConfig);
