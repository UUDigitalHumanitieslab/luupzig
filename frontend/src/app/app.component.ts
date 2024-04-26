import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  private darkMode = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkMode.asObservable();

  constructor(@Inject(DOCUMENT) document: Document) {
    const style = document.createElement('link');
    style.rel = 'stylesheet';

    document.head.append(style);

    this.darkMode.subscribe(dark => {
      const theme = dark ? 'dark' : 'light';
      document.documentElement.classList.remove(dark ? 'theme-light' : 'theme-dark');
      document.documentElement.classList.add(`theme-${theme}`);

      style.href = `${theme}.css`;
    });
  }

  toggleDark() {
    this.darkMode.next(!this.darkMode.value);
  }
}
