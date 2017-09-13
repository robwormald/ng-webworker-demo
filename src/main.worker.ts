import 'zone.js'
import {platformWorkerApp} from '@angular/platform-webworker'
import {AppModuleNgFactory} from './app.ngfactory'

platformWorkerApp()
  .bootstrapModuleFactory(AppModuleNgFactory)
