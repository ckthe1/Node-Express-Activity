console.log('hello express');
let express = require('express');
let app = express();

app.use(express.static('server/public'));// get any reuqst, static

app.listen(5000, function () {
    console.log('port 5000');


});//for app to listen for req and res