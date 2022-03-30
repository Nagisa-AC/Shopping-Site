// Imports
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

// Admin routes + Shop routes import
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Express app
const app = express();

// Pug View engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body parser
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, 'public')))

// MIddleware for routes folder
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// 404 currently not working --> PLS fix
app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle : 'Page Not Found'});
});


// Listener
const port = 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
