import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { YuvWidgetGridModule } from '@yuuvis/widget-grid';

import { AppComponent } from './app.component';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetTwoSetupComponent } from './widget-two/widget-two.setup.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetTwoSetupComponent,
  ],
  imports: [BrowserModule, YuvWidgetGridModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
