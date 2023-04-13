import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ExplainComponent, LineComponent, LuupzigModule, SourceComponent, TranslationComponent } from 'luupzig';
import { ViewWrapperComponent } from './view-wrapper/view-wrapper.component';

@NgModule({
  declarations: [
    ViewWrapperComponent
  ],
  imports: [
    BrowserModule,
    LuupzigModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    customElements.define('gloss-explain',
      createCustomElement(ExplainComponent, { injector: this.injector }));

    customElements.define('gloss-line',
      createCustomElement(LineComponent, { injector: this.injector }));

    customElements.define('gloss-source',
      createCustomElement(SourceComponent, { injector: this.injector }));

    customElements.define('translation-source',
      createCustomElement(TranslationComponent, { injector: this.injector }));

    customElements.define('gloss-view',
      createCustomElement(ViewWrapperComponent, { injector: this.injector }));
  }
}
