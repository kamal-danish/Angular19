import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

// HMR support
if (import.meta['hot']) {
  import.meta['hot'].accept();
  import.meta['hot'].dispose(() => console.log('HMR: module replaced!'));
}

bootstrap().catch(err => console.error(err));
