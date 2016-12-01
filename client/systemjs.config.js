var isPublic = typeof window != "undefined";

(function (global) {
  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    'clarity-angular': '../node_modules/clarity-angular',
    //'ng-lightning/ng-lightning': 'npm:ng-lightning@1.0.1/bundles/ng-lightning.umd.js',
    'tether': 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.2.0/js/tether.js',
    'ng-lightning/ng-lightning': 'https://unpkg.com/ng-lightning@1.0.1/bundles/ng-lightning.umd.js',
    '@angular': (isPublic) ? '@angular' : 'node_modules/@angular',
    'rxjs': (isPublic) ? 'rxjs' : 'node_modules/rxjs'
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js', defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' },
    'clarity-angular' : { main: './index.js', defaultExtension: 'js' }
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
  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);