var port = 7777;
var app = require('express')();

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));
app.use(require('express').static('public'));

require('http').createServer(app).listen(port,function(){
  console.log('server is running you beeezy, on port', port)
});
