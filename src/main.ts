import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

declare global {
  interface Window {
    ngRef?: any; // or type as ApplicationRef if you want
  }
}

const bootstrap = () => bootstrapApplication(AppComponent, {...appConfig});

if (import.meta['hot']) {
  import.meta['hot'].accept();
  import.meta['hot'].dispose(() => {
    console.log('HMR: module replaced!');
    if (window.ngRef) {
      window.ngRef.destroy();
    }
  });
}

bootstrap()
  .then(appRef => {
    if (import.meta['hot']) {
      window.ngRef = appRef;
    }
  })
  .catch(err => console.error(err));
