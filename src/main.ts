import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { EmployeeModule } from './app/employee.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EmployeeModule)
  .catch(err => console.error(err));
