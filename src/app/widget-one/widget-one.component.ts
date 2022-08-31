import { Component, Input, OnInit } from '@angular/core';
import { IWidgetComponent } from '@yuuvis/widget-grid';

@Component({
  selector: 'app-custom-widget',
  template:
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M0 0h24v24H0V0z" fill="none"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-2.5c2.33 0 4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2s-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5z"/></svg>',
  styles: [
    `
      :host {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        color: #fff;

        svg {
          width: 66%;
          height: auto;
        }
      }
    `,
  ],
})
export class WidgetOneComponent implements IWidgetComponent {
  @Input() widgetConfig: any;
}
