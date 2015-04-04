# scoped-modules-checker [![Build Status](https://travis-ci.org/azu/scoped-modules-checker.svg?branch=master)](https://travis-ci.org/azu/scoped-modules-checker)

To check the package is [scoped packages](https://docs.npmjs.com/misc/scope "Scoped packages").

## Installation

    npm install scoped-modules-checker

## Usage

```js
var checker = require("scoped-modules-checker");
var packageJSONPath = path.join(process.cwd(), "package.json");
var pkg = JSON.parse(fs.readFileSync(packageJSONPath));
var errors = checker.validateScopedPackage(pkg);
if (errors.length > 0) {
    // Found Error
    console.error(errors.join("\n"));
}

## Tests

    npm test

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT