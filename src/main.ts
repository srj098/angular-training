import 'hammerjs';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {BloggerAppModule} from './app/blogger-app/blogger-app.module';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BloggerAppModule)
  .catch(err => console.error(err));
