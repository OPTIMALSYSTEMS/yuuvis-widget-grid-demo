# yuuvis widget grid demo app

On this branch we extend the default grid by a collction of yuuvis Momentum related widgets. To do so we need to add some new dependencies:

- [@yuuvis/widget-grid-widgets](https://www.npmjs.com/package/@yuuvis/widget-grid-widgets)   (Library containing the widgets)
- [@yuuvis/framework](https://www.npmjs.com/package/@yuuvis/framework)    (peer dependency for the widgets)

As we are connecting the app to a yuuvis Momentum backend (in order for the widgets to work) we need to setup the framework library first (check the documentation in NPM to see how this is done - or take a look at the diffrence between this branch and `main`). You'd also have to have the yuuvis dev proxy in place to be able to develop on your local maschine.

## Using the Momentum widgets
In AppComponent you'll find the registration of the avalable widgets. Here we added the widgets comming from the `@yuuvis/widget-grid-widgets` lib.

If you are now running the app you'll be able to add new widgets to the grid.