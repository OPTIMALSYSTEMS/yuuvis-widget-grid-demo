import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWidgetSetupComponent } from '@yuuvis/widget-grid';
import { WidgetTwoConfig } from './widget-two.interface';

/**
 * Setup component for the widget#2
 */
@Component({
  selector: 'app-widget-two-setup',
  templateUrl: './widget-two.setup.component.html',
  styleUrls: ['./widget-two.setup.component.scss'],
})
export class WidgetTwoSetupComponent implements IWidgetSetupComponent {
  name: string | undefined;
  @Input() set widgetConfig(wc: WidgetTwoConfig | undefined) {
      if(wc) this.name = wc.name
  }
  @Output() widgetConfigChange = new EventEmitter<WidgetTwoConfig>();
}
