import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { userReducer } from './store/users/user.reducer';
import { UserEffects } from './store/users/user.effect';
import { provideHttpClient } from '@angular/common/http';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    // ✅ Register your reducer under the 'users' key
    provideStore({ users: userReducer }),
    
    // ✅ Register effects
    provideEffects([UserEffects]),
    
    // optional devtools
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
  ]
};
