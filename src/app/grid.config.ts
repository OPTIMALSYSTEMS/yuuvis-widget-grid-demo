import { WidgetGridItemConfig } from "@yuuvis/widget-grid";

export const testGridItemConfig: Array<WidgetGridItemConfig> = [
    {
      id: '0',
      cols: 2,
      rows: 1,
      y: 1,
      x: 0,
      widgetName: '404',
      widgetConfig: {
        queryJson: { term: 'bart*' },
        titleField: 'appClient:clienttitle',
        descriptionField: 'appClient:clientdescription',
        countTile: true,
      },
    },
    {
      id: 'sq',
      cols: 2,
      rows: 1,
      y: 1,
      x: 0,
      widgetName: 'yuv.widget.storedquery',
      widgetConfig: {
        title: 'A stored query to rule them all',
        dynamicFields: ['appPersonalfile:pfclass'],
        queryData: { 'appPersonalfile:pfclass': ['Employee'] },
        types: ['appPersonalfile:pfpersonalfile'],
      },
    },
    {
      id: 'sqnf',
      cols: 2,
      rows: 1,
      y: 1,
      x: 0,
      widgetName: 'yuv.widget.storedquery',
      widgetConfig: {
        title: 'A stored query Without a form',
        dynamicFields: [],
      },
    },
    {
      id: '1',
      cols: 2,
      rows: 1,
      y: 0,
      x: 0,
      widgetName: 'yuv.widget.hitlist',
      widgetConfig: {
        title: 'Number of Martins',
        queryJson: { term: 'bart*' },
        titleField: 'appClient:clienttitle',
        descriptionField: 'appClient:clientdescription',
        countTile: true,
      },
    },
    {
      id: '2',
      cols: 2,
      rows: 2,
      y: 0,
      x: 2,
      widgetName: 'yuv.widget.hitlist',
      widgetConfig: {
        title: 'List of things',
        queryJson: { term: 'bart*' },
        size: 5,
        titleField: 'appClient:clienttitle',
        descriptionField: 'appClient:clientdescription',
      },
    },
  ];