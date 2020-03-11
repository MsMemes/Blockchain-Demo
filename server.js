const express = require('express');

// Initializations
var app = express();
var path = require('path');
// Settings
app.set('port', 8080);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/images/')));

// Display html
app.get('/', (req, res) => {
    res.render(path.join(__dirname,'/views/main.html' ));
})

// Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});