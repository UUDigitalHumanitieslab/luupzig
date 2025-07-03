# Luupzig

[![DOI](https://zenodo.org/badge/627391873.svg)](https://zenodo.org/doi/10.5281/zenodo.10374572)
[![Actions Status](https://github.com/CentreForDigitalHumanities/luupzig/workflows/Unit%20tests/badge.svg)](https://github.com/CentreForDigitalHumanities/luupzig/actions)
[![npm version](https://badge.fury.io/js/luupzig.svg)](https://badge.fury.io/js/luupzig)

Library for showing for Leipzig annotated glosses.

This project consists of:

* `library/`: Angular library with a gloss view
* `frontend/`: frontend showing its features and useful for development of library
* `elements/`: export of library using [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
* `elements-demo.html`: demo showing how to import this library using Web Components

## Development server

Run `yarn build library` first.

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files of the frontend. If you make any changes to the library then you will need to rebuild the library and restart the dev server.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build:elements` for building the Web Components. Note the `:`!

Run `yarn build library` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Publishing a new version

1. Compile using `yarn build library`
2. `cd dist/luupzig`
3. Optionally run `npm pack` to test the package locally
4. Remove the `luupzig-x.xx.x.tgz` file (if generated in 3)
5. Run `npm publish`
