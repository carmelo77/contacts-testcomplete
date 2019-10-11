const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const api = require('./routes/api');

//db
mongoose.connect('mongodb+srv://carmelo77:carmelo7712@cluster0-8qubx.mongodb.net/test?retryWrites=true&w=majority')
    .then(db => console.log('DB ON'))
    .catch(err => console.log(err)
);

//Settings
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));

//Middlewares
app.use(cors());
app.use(morgan('dev')); //Para poder ver en consola las peticiones al servidor.
app.use(bodyParser.json()); //Entender la api en json.

//Route
app.use('/', api); // Prefix Route

//static path
app.use(express.static(path.join(__dirname, '/front/dist')));

/*app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/front/dist/index.html')); 
});*/

//Server ready
app.listen(app.get('port'), () => {
    console.log('Server ready on port: ' + app.get('port'));
});