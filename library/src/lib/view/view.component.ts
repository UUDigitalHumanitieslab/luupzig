import { AfterContentChecked, Component, ContentChildren, HostListener, OnDestroy, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExplainComponent } from '../explain/explain.component';
import { LineComponent } from '../line/line.component';
import { SourceComponent } from '../source/source.component';
import { TranslationComponent } from '../translation/translation.component';

@Component({
  selector: 'luu-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements AfterContentChecked, OnDestroy {
  subscriptions: Subscription[] = [];

  subscribedLines: LineComponent[] = [];

  @ContentChildren(SourceComponent)
  sources?: QueryList<SourceComponent>;

  @ContentChildren(LineComponent)
  lines?: QueryList<LineComponent>;

  @ContentChildren(TranslationComponent)
  translations?: QueryList<TranslationComponent>;

  @ContentChildren(ExplainComponent)
  explain?: QueryList<ExplainComponent>;

  @HostListener('copy', ['$event'])
  copy(e: ClipboardEvent) {
    const clipboard = e.clipboardData;
    clipboard?.setData("text", this.toString());
    // TODO: clip by selection
    e.preventDefault();
  }

  constructor() { }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }

  ngAfterContentChecked(): void {
    if (this.lines?.length) {
      for (let line of this.lines) {
        if (this.subscribedLines.indexOf(line) === -1) {
          this.subscriptions.push(
            line.hover.subscribe(({ token, segment }) => {
              this.updateLines(token, segment);
            }));

          this.subscribedLines.push(line);
        }
      }
    }
  }

  toString() {
    return `${this.sources?.map(x => x.toString())}
${this.lines?.map(x => x.toString()).join('\n')}
${this.translations?.map(x => x.toString())} ${this.explain?.map(x => x.toString())}
`;
  }

  private updateLines(token: number, segment: number) {
    if (!this.lines?.length) {
      return;
    }

    for (let line of this.lines) {
      line.hoveredToken = token;
      line.hoveredSegment = segment;
    }
  }
}
