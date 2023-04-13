import { Injectable } from '@angular/core';

/**
 * Token which can be sub-divided for highlighting
 */
export interface Token {
  parts: {
    highlight: boolean,
    segments: {
      smallCaps: boolean,
      whitespace: boolean,
      /**
       * Segment index.
       * A segment can be split into separate parts (depending on the highlight)
       */
      index: number,
      text: string
    }[]
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class GlossTokenizerService {

  tokenize(value: string): Token[] {
    let tokens: Token[] = [];
    let highlight = false;

    // for (let tokenText of value.split(' ')) {
    let parts: Token['parts'] = [{
      highlight,
      segments: []
    }];
    const separators = /[ \*\.\-_=:;~\>\<\[\]\(\)\\]/g;
    let match: RegExpExecArray | null;
    let index = 0;
    let segment = 0;
    while ((match = separators.exec(value)) != null) {
      if (match.index > index) {
        let text = value.substring(index, match.index);
        parts[parts.length - 1].segments.push({
          smallCaps: this.checkSmallCaps(text),
          whitespace: false,
          index: segment,
          text
        });
      }

      index = match.index;

      switch (match[0]) {
        case '*':
          highlight = !highlight;
          // highlights are grouped
          parts.push({
            highlight,
            segments: []
          });
          index++; // don't include in output
          break;

        case ' ':
          // rule 2A: a hyphen and a single space may be used together in the object language
          if (index + 1 < value.length && value[index + 1] !== '-') {
            // preserve whitespace
            parts[parts.length - 1].segments.push({
              smallCaps: false,
              whitespace: true,
              index: segment,
              text: value[index]
            });

            // add existing token
            tokens.push({
              parts
            });

            // new token
            parts = [{
              highlight,
              segments: []
            }];
            index++;
          }
          break;

        default:
          if (match[0] === '-') {
            segment += 2;
          }
          // separators as separate parts
          parts[parts.length - 1].segments.push({
            smallCaps: false,
            whitespace: false,
            // separate segment separators
            index: match[0] === '-' ? segment - 1 : segment,
            text: value[index]
          });
          index++;
          break;
      }
    }

    if (index < value.length) {
      let text = value.substring(index);
      parts[parts.length - 1].segments.push({
        smallCaps: this.checkSmallCaps(text),
        whitespace: false,
        index: segment,
        text
      });
    }

    if (parts[0].segments.length) {
      tokens.push({
        parts
      });
    }

    return tokens;
  }

  private checkSmallCaps(text: string): boolean {
    return text.toUpperCase() === text;
  }
}
