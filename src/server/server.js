import path from 'path'
import express from 'express'
const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, 'index.html')

const router = express.Router();

app.use(express.static(DIST_DIR))


app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
})

app.get('/quality', (req, res) => {
    res.sendFile(path.join(DIST_DIR, '/quality.html'))
})

app.get('/quantity', (req, res) => {
    res.sendFile(path.join(DIST_DIR, '/quantity.html'))
})


/*
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


const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})