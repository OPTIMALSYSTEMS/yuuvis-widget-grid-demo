import { Component, Input } from "@angular/core";
import { IWidgetComponent } from "@yuuvis/widget-grid";
import { WidgetTwoConfig } from "./widget-two.interface";

/**
 * Display component for widget#2
 */
@Component({
    selector: 'app-widget-two',
    template: 'Hello, {{widgetConfig ? widgetConfig.name : "World"}}!',
    styles: [`:host { height: 100%;
      display: flex; flex-flow: column; align-items: center; justify-content: center;
      font-size: 3em;
    }`],
  })
  export class WidgetTwoComponent implements IWidgetComponent {
    @Input() widgetConfig: WidgetTwoConfig | undefined;
  }