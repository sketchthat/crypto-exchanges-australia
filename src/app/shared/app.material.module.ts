import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSnackBarModule,
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule { }
