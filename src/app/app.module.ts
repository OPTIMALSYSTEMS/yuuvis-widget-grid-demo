import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YuvWidgetGridModule } from '@yuuvis/widget-grid';
import { WidgetGridWidgetsModule } from '@yuuvis/widget-grid-widgets';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YuvFrameworkModule } from '@yuuvis/framework';

import { AppComponent } from './app.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetTwoSetupComponent } from './widget-two/widget-two.setup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetTwoSetupComponent,
  ],
  imports: [
    BrowserModule,
    YuvWidgetGridModule,
    FormsModule,
    WidgetGridWidgetsModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    YuvFrameworkModule.forRoot({
      translations: [
        'assets/i18n/@yuuvis-wgw/',
        'assets/i18n/@yuuvis/',
        'assets/i18n/',
      ],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
