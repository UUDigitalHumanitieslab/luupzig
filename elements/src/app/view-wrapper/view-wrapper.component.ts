import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-view-wrapper',
  templateUrl: './view-wrapper.component.html',
  styleUrls: ['./view-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ViewWrapperComponent {
  @Input()
  source?: string;

  @Input()
  example?: string;

  @Input()
  gloss?: string;

  @Input()
  translation?: string;
}
