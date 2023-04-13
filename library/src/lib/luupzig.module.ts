import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExplainComponent } from './explain/explain.component';
import { LineComponent } from './line/line.component';
import { SourceComponent } from './source/source.component';
import { TranslationComponent } from './translation/translation.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    ExplainComponent,
    LineComponent,
    SourceComponent,
    TranslationComponent,
    ViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExplainComponent,
    LineComponent,
    SourceComponent,
    TranslationComponent,
    ViewComponent
  ]
})
export class LuupzigModule { }
