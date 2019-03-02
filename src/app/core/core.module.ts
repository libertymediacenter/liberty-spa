import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DrawerComponent } from './drawer/drawer.component';

@NgModule({
  declarations: [
    DrawerComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    DrawerComponent,
  ],
})
export class CoreModule {
}
