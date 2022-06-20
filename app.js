const express = require('express');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const router = require('./src/routes/index.routes');

app.set('views', path.join(__dirname, "./src/views"));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use("/", router);
app.use(express.static('public'));

app.listen(port, ()=>{
    console.log('Servidor activo en el puerto' + port);
})