var express = require('express');
var router = express.Router();

/* POST home page. */
router.post('/', function(req, res, next) {

  console.log()

  var html = req.body.html;

  var heading = html.split("<h1")[1].split(">")[1].split("</h1")[0];

  var title = html.split("<title")[1].split(">")[1].split("</title")[0]

  console.log(heading);
  console.log(title);


  var returnObject = {containsQuestionmark:false}

  if (title.contains("?") || heading.contains("?")){
    returnObject.containsQuestionmark=true;
  }

  res.send(JSON.stringify(returnObject));

});

module.exports = router;
