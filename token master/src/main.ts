import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}


declare global {
  interface Window {
    appConfig: any;
  }
}
//export version and build number to global
window.appConfig = environment;

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
