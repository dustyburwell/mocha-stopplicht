var cp = require("child_process");

module.exports = StopplichtReporter = function(runner) {
  var failures = [];

  runner.on('pass', function(test){
  });

  runner.on('fail', function(test, err){
    failures.push(test.fullTitle());
  });

  runner.on('end', function(){
    if (!failures) {
      cp.exec("stopplicht green");
    } else {
      var command;
      command  = "stopplicht red ";
      command += failures.length;
      command += " tests failed ^ ";

      var failureLines = failures.map(function(f, i) {
        return (i + 1) + ". " + f
      });

      command += failureLines.join(" ^ ");

      cp.exec(command);
    }

    process.exit(failures.length);
  });

  cp.exec("stopplicht yellow");
}
