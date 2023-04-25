import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { AppState } from './app-reducer';
import { Store } from '@ngrx/store';
import { setMusic } from './store/music.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'appmusic-falcnju';
  constructor(public translate: TranslateService,private store:Store<AppState>) {
    let me = this;
    me.translate.addLangs(['en', 'es']);
    const lang = me.translate.getBrowserLang();
    if ((lang !== 'es') && (lang !== 'en')) {
      me.translate.setDefaultLang('en');
    } else {
      console.log('[BROWSERLANG]', lang);
      me.translate.setDefaultLang(lang);
    }
  }

  switchLang(lang: string) {
    let me = this;
    me.translate.use(lang);
  }

  changeStateMusic(){
    let me=this;
    me.store.dispatch(setMusic({singer:'singer',song:'song'}));
  }
}
