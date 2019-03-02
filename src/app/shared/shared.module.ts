import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';

import { DotDividerComponent } from './components/dot-divider.component';
import { LoadingSpinnerComponent } from './components/loading-spinner.component';
import { ScrollableDirective } from './directives/scrollable/scrollable.directive';

const COMPONENTS = [
  DotDividerComponent,
  LoadingSpinnerComponent,
];

const DIRECTIVES = [
  ScrollableDirective,
];

const MODULES = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  MomentModule,
  ReactiveFormsModule,
  RouterModule,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    ...MODULES,
  ],
  exports: [
    ...COMPONENTS,
    ...DIRECTIVES,
    ...MODULES,
  ],
})
export class SharedModule {

}
