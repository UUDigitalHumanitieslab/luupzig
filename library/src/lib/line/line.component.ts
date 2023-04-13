import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GlossTokenizerService, Token } from '../gloss-tokenizer.service';

@Component({
  selector: 'luu-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnChanges {
  tokens: Token[] = [];

  @Input()
  value?: string;

  @Input()
  type?: 'gloss' | 'example';

  @Input()
  hoveredToken?: number;

  @Input()
  hoveredSegment?: number;

  @Output()
  hover = new EventEmitter<{ token: number, segment: number }>();

  constructor(private glossTokenizer: GlossTokenizerService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.value) {
      this.tokens = [];
    } else if (changes.value &&
      (changes.value.isFirstChange() ||
        changes.value.previousValue !== changes.value.currentValue)) {
      this.tokens = this.glossTokenizer.tokenize(this.value);
    }
  }

  emitHover(token: number, segment: number) {
    this.hover.emit({
      token,
      segment
    });
  }

  toString() {
    return this.value?.replace(/ /g, '\t') || '';
  }
}
