import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  contactForm;

  constructor(
    private fb: FormBuilder,
    private el: ElementRef
  ) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    gsap.from(this.el.nativeElement.querySelectorAll('.contact-card'), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: this.el.nativeElement,
        start: 'top 85%'
      }
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    alert('Message sent (placeholder)');
    this.contactForm.reset();
  }
}
