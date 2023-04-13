import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'luu-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent {

  constructor(private elementRef: ElementRef<HTMLElement>) {
  }

  toString() {
    return this.elementRef.nativeElement.innerText || '';
  }
}
