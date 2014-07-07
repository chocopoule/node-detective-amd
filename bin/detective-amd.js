var getDependencies = require('../'),
    filename = process.argv[2],
    fs = require('fs');

if (! filename) {
  console.log('Filename not supplied');
  console.log('Usage: detective-amd <filename>');

} else {
  var deps = getDependencies(fs.readFileSync(filename));
  deps.forEach(function(dep) {
    console.log(dep);
  });
}
