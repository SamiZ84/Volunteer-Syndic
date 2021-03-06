var isPublic = typeof window != "undefined";

//node_modules/@progress/kendo-angular-buttons/dist/npm/main.js
(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    //'ng-lightning/ng-lightning': 'npm:ng-lightning@1.0.1/bundles/ng-lightning.umd.js',
    'tether': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.js',
    'ng-lightning/ng-lightning': 'https://unpkg.com/ng-lightning@1.0.1/bundles/ng-lightning.umd.js',
    '@angular': (isPublic) ? '@angular' : 'node_modules/@angular',
    'rxjs': (isPublic) ? 'rxjs' : 'node_modules/rxjs',

    '@progress': (isPublic) ? '@progress' : 'node_modules/@progress',
    '@telerik': (isPublic) ? '@telerik' : 'node_modules/@telerik'
    //'@telerik/kendo-intl': '@telerik/kendo-intl'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
    //'@telerik/kendo-intl': { main: 'dist/npm/main.js', defaultExtension: 'js'}
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/' + pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/' + pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);
  
  /* Kendo config */
  var kendoPackageNames = [
    'kendo-data-query',
    'kendo-angular-intl',
    'kendo-angular-buttons',
    'kendo-angular-grid',
    'kendo-angular-inputs',
    'kendo-angular-dropdowns',
    'kendo-popup-common',
    'kendo-angular-popup'
  ]
  function kendoPackIndex(pkgName) {
    packages['@progress/' + pkgName] = { main: 'dist/npm/main.js', defaultExtension: 'js' };
  }
  kendoPackageNames.forEach(kendoPackIndex);
  /* Kendo config */

 /* teleric config */
  var telericPackageNames = [
    'kendo-intl',
    'kendo-draggable',
    'kendo-inputs-common',
    'kendo-dropdowns-common'
  ]
  function telericPackIndex(pkgName) {
    packages['@telerik/' + pkgName] = { main: 'dist/npm/main.js', defaultExtension: 'js' };
  }
  telericPackageNames.forEach(telericPackIndex);
  /* teleric config */

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);