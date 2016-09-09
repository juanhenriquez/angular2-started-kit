# Angular 2 Project Set up.

1) Install typescript and typings:

`npm install typescript typings --save-dev`

2) Create tsconfig.json and typings.json(Leave empty)

tsconfig.json:

```
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "moduleResolution": "node",
        "sourceMap": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "removeComments": false,
        "noImplicitAny": false,
        "outDir": "dist/app"
    },
    "filesGlob": [
        "./app/**/*.ts",
        "./app/**/*.tsx"
    ]
}

```

3) Install typings:

`typings install dt~core-js dt~jasmine dt~node --save --global`

4) Install concurrently package for run multiple tasks at the same time.

`npm i concurrently --save-dev`

5) Add tasks to package.json:

```
"scripts": {
  "start": "tsc && concurrently \"npm run tsc:w\" \"npm run lite\"",
  "tsc": "tsc",
  "tsc:w": "tsc -w",
  "typings": "typings",
  "postintsall": "typings install"
}
```

** Optionally install lite-server to watch file change and reload the browser with BrowserSync package. **

` npm install lite-server --save-dev `

then add a task in the scripts object in the _package.json_ file:

```
"scripts": {
  ...
  "lite": "lite-server"
  ...
}
```


or install globally:

`npm install lite-server -g `

and then run "lite-server" in all your projects.

## Angular 2 Dependencies.

### External Libraries

- core-js
- reflect-metadata
- rxjs
- systemjs
- zone.js

### Main Packages

- @angular/core
- @angular/common
- @angular/compiler
- @angular/platform-browser
- @angular/platform-browser-dynamic

### Optional Packages

- @angular/router
- @angular/forms
- @angular/http
