PROJECT_PATH = "./harp";
PORT = 3000;

var harp = require('harp');

harp.server(PROJECT_PATH, {port: PORT}, function(){
  console.log("Now listening on port " + PORT);
});
