const express = require('express');

// Initializations
var app = express();
var path = require('path');
// Settings
app.set('port', 8080);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'blockchaindemo.io')));

// Display html
app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/blockchaindemo.io/main.html' ));
})

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});