import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'luu-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  toString() {
    return this.elementRef.nativeElement.innerText || '';
  }
}
