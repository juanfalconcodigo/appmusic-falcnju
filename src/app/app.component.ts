import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appmusic-falcnju';
  constructor(public translate: TranslateService) {
    let me = this;
    me.translate.addLangs(['en', 'es']);
    const lang = me.translate.getBrowserLang();
    if ((lang !== 'es') && (lang !== 'en')) {
      me.translate.setDefaultLang('en');
    }else{
      console.log('[BROWSERLANG]',lang);
      me.translate.setDefaultLang(lang);
    }
  }

  switchLang(lang: string) {
    let me = this;
    me.translate.use(lang);
  }
}
