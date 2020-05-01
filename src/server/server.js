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

//We tell express that we are using webpack to bundle our modules.
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
    //res.sendFile(HTML_FILE); //remnant of code before Webpack
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

app.get('/edit', (req, res, next) => {
    compiler.outputFileSystem.readFile(path.join(DIST_DIR, '/edit.html'), (err, result) => {
        if (err) {
            return next(err);
        }
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
    
});

//Serve the app to localhost:8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log('Press Ctrl+C to quit.');
});