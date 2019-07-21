import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  param = { value: 'world' };
  title = 'angular-photo-contest';

  constructor(translate: TranslateService) {
      translate.setDefaultLang('en');
      let browserLang = translate.getBrowserLang();
      
      // Use 'pt' if first browser language is either 'pt' or 'pt-BR'.
      translate.use(browserLang.match(/^pt/) ? 'pt' : 'en');
  }
}
