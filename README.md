# yuuvis widget grid demo app

Starting from a regular Angular CLI project we first of all install the required libraries:

- [@yuuvis/widget-grid](https://www.npmjs.com/package/@yuuvis/widget-grid)   (The grid itself)
- [@yuuvis/styles](https://www.npmjs.com/package/@yuuvis/styles)    (just some helper styles and variables)
- [@ngx-pwa/local-storage](https://www.npmjs.com/package/@ngx-pwa/local-storage) (for storing the grid in the browser)

## Create some widgets
There are two simple widgets in this demo application that showcase the two types of widgets available. You could create widgets with or without setup components. 

Widgets without setup do not need any configuration or setup. They are self contained like for example a widget that shows the current time or the weather in Berlin. In our case WidgetOneComponent just renders an SVG.

But you could make your widgets more dynamic by adding a setup component. For the weather widget example a setup could be used to specify a city you want to see the weather forecast for. WidgetTwoComponent has a simple setup component where you could enter a name. Then the widget prints out a friendly hello.

If you want to know how to create those kinds of widgets take a look at the description of the [@yuuvis/widget-grid](https://www.npmjs.com/package/@yuuvis/widget-grid) library on NPM.

## Using some yuuvis related widgets
With the [@yuuvis/widget-grid-widgets](https://www.npmjs.com/package/@yuuvis/widget-grid-widgets) library we published a couple of widgets for your yuuvis Momentum project. If you want to learn more about that checkout the 'widget-grid-widgets' branch of this project.
