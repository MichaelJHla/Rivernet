import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from '../../webpack.config.js';

const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, 'index.html'),
    compiler = webpack(config);

const router = express.Router();

//app.use(express.static(DIST_DIR));
app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));


//Here, we see what page the user is on, and depending on the url extension, send the correct html.
app.get('*', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
    //res.sendFile(HTML_FILE);
});

app.get('/quality', (req, res, next) => {
    compiler.outputFileSystem.readFile(path.join(DIST_DIR, '/quality.html'), (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
    //res.sendFile(path.join(DIST_DIR, '/quality.html'));
});

app.get('/quantity', (req, res, next) => {
    compiler.outputFileSystem.readFile(path.join(DIST_DIR, '/quantity.html'), (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
    //res.sendFile(path.join(DIST_DIR, '/quantity.html'));
});


/*
//This code is another attempt at solving the issue. 
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/quality', function (req, res) {
    res.sendFile(path.join(__dirname + '/quality.html'));
});

router.get('/quantity', function (req, res) {
    res.sendFile(path.join(__dirname + '/quantity.html'));
});

//add the router
app.use(express.static(__dirname + '/html'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/css'));
//Store all JS and CSS in Scripts folder.
app.use(express.static(__dirname + '/js'));

app.use('/', router);
*/


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});