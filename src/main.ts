import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { RouterModule } from "@angular/router";
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideStore, provideState } from '@ngrx/store';
import { appReducers } from './app/app-reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
/* import {routes} from "./app/routes"; */

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    /* provideRouter(routes) */
    provideHttpClient(), // or importProvidersFrom(HttpClientModule) in < Angularv15
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpTranslateLoader,
          deps: [HttpClient]
        }
      })
    ),
    provideStore(appReducers),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ]
})
  .catch(err => console.error(err));


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}