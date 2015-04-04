#!/usr/bin/env node
var path = require("path");
var fs = require("fs");
var checker = require("../lib/checker");
var packageJSONPath = path.join(process.cwd(), "package.json");
var pkg = JSON.parse(fs.readFileSync(packageJSONPath));
var errors = checker.validateScopedPackage(pkg);
if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exit(1);
} else {
    process.exit(0);
}