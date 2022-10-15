import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

const MODULES: any[] = [
  NbLayoutModule,
  NbEvaIconsModule,
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MODULES
  ],
  exports: [
    MODULES
  ]
})
export class SharedModule {
}
