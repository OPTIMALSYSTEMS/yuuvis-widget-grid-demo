import { Component } from '@angular/core';
import { LocalStorage } from '@ngx-pwa/local-storage';
import {
  GridItemEvent,
  WidgetGridItemConfig,
  WidgetGridRegistry,
  WidgetGridUtils,
} from '@yuuvis/widget-grid';
import { WidgetOneComponent } from './widget-one/widget-one.component';
import { WidgetTwoComponent } from './widget-two/widget-two.component';
import { WidgetTwoSetupComponent } from './widget-two/widget-two.setup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  customWidgetRegistered: boolean = false;
  editMode: boolean = false;
  private _updatedGridConfig: Array<WidgetGridItemConfig> | undefined;
  gridDirty: boolean = false;

  getEditButtonLabel() {
    return `${this.editMode ? 'Disable' : 'Enable'} edit mode`;
  }

  private STORAGE_KEY = 'ymfc.wppc.grid';

  gridItemConfig: Array<WidgetGridItemConfig> = [];
  private testGridItemConfig: Array<WidgetGridItemConfig> = [
    {
      id: '000',
      widgetName: 'app.custom.widget.one',
      widgetConfig: {},
      x: 0,
      y: 0,
      rows: 4,
      cols: 1,
    },
    {
      id: '001',
      widgetName: 'app.custom.widget.two',
      x: 1,
      y: 0,
      rows: 4,
      cols: 1,
      widgetConfig: {
        name: 'world',
      },
    },
  ];

  constructor(
    private storage: LocalStorage,
    private widgetGridRegistry: WidgetGridRegistry
  ) {}

  saveConfig() {
    this.storage
      .setItem(
        this.STORAGE_KEY,
        WidgetGridUtils.gridConfigStringify(this._updatedGridConfig!)
      )
      .subscribe();
  }

  clearConfig() {
    this.storage.removeItem(this.STORAGE_KEY).subscribe();
  }

  onGridChange(grid: Array<WidgetGridItemConfig>) {
    this.gridDirty = true;
    this._updatedGridConfig = grid;
    console.log('Grid changed', grid);
  }

  onGridEvent(e: GridItemEvent) {
    console.log(e);
  }

  private registerWidgets() {
    this.widgetGridRegistry.registerGridWidgets([
      {
        label: 'Widget One',
        name: 'app.custom.widget.one',
        widgetComponent: WidgetOneComponent,
      },
      {
        label: 'Widget Two (with setup)',
        name: 'app.custom.widget.two',
        widgetComponent: WidgetTwoComponent,
        setupComponent: WidgetTwoSetupComponent,
      },
      //     {
      //       name: 'yuv.widget.hitlist',
      //       label: 'Hitlist or count tile',
      //       setupComponent: HitlistSetupComponent,
      //       widgetComponent: HitlistWidgetComponent,
      //     },
      //     {
      //       name: 'yuv.widget.storedquery',
      //       label: 'Stored query',
      //       setupComponent: StoredQuerySetupComponent,
      //       widgetComponent: StoredQueryWidgetComponent,
      //     },
      //     {
      //       name: 'yuv.widget.charts',
      //       label: 'Charts',
      //       setupComponent: ChartsSetupComponent,
      //       widgetComponent: ChartsWidgetComponent,
      //     },
    ]);
  }

  ngOnInit(): void {
    this.registerWidgets();
    this.storage.getItem(this.STORAGE_KEY).subscribe((res) => {
      this.gridItemConfig = res
        ? WidgetGridUtils.gridConfigParse(res as string)
        : this.testGridItemConfig;
    });
  }
}
