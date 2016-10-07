var express = require('express');
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();
app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});

app.post('/info', upload.single('file'), function (req, res, next) {
  var a = {size : req.file.size}
  res.send(a)
})



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
