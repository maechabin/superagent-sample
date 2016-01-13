var request = require("superagent");

request
  .get('./test.json')
  .end(function (err, res) {
    if (err || !res.ok) {
      console.log(err); // => "Error: ~"
    } else {
      if (res.status === 200) {
        console.log(res.statusText); // => "OK"
      }
    }
  });
