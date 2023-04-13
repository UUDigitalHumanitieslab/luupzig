import { Component, Input, OnChanges } from '@angular/core';
import { GlossTokenizerService, Token } from '../gloss-tokenizer.service';

@Component({
  selector: 'luu-explain',
  templateUrl: './explain.component.html',
  styleUrls: ['./explain.component.scss']
})
export class ExplainComponent implements OnChanges {

  tokens: Token[] = [];

  @Input()
  value?: string;

  constructor(private glossTokenizer: GlossTokenizerService) { }

  ngOnChanges(): void {
    if (!this.value) {
      this.tokens = [];
    } else {
      this.tokens = this.glossTokenizer.tokenize(this.value);
    }
  }

  toString() {
    return this.value ? `(${this.value})` : '';
  }
}
