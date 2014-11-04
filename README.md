Adds support for [stopplicht](http://www.github.com/dustyburwell/stopplicht) in the [mocha](https://github.com/mochajs/mocha) Node.js unit test framework. When your tests are run, the stopplicht light in your toolbar or system tray will change from yellow/red/green, depending on the state of the test run. It also pops up a notification with a summary of any failed tests.

## Get it

First, install [stopplicht](https://www.npmjs.org/package/stopplicht) and [mocha](https://www.npmjs.org/package/mocha) from NPM.

Then install mocha-stopplicht, run `npm install --save-dev mocha-stopplicht`.

## Use it

Mocha-stopplicht runs as a custom mocha reporter. To use, it just run your test suite:

```
> mocha --reporter mocha-stopplicht spec
```

### Multiple reporters

One negative side effect of using the stopplicht reporter is that you lose quite a bit of fidelity on failed tests. One option to address that issue is to use [mocha-multi](https://github.com/glenjamin/mocha-multi) to multiplex reporting.

```
> multi='list=- mocha-stopplicht=-' ./node_modules/.bin/mocha -R mocha-multi spec
```

**note**: mocha-multi currently only works on mocha version 1.x
