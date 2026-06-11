const React = require('react');
const ReactDOMServer = require('react-dom/server');
const DOM = React.DOM;
const body = DOM.body;
const div = DOM.div;
const script = DOM.script;

const browserify = require('browserify');
const babelify = require("babelify");

const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')

let TodoBox = require('./views/index.jsx');

let data = [
  {title: 'Shopping', detail: process.argv[3]},
  {title: 'Hair cut', detail: process.argv[4]}
]

app.use('/bundle.js', (req, res) => {
    res.setHeader('content-type', 'application/javascript');
    browserify('./app.js')
      .transform('babelify', {presets: ["es2015", "react"]})
      .bundle()
      .pipe(res);
})

app.use('/', (req, res) => {
     let initialData = JSON.stringify(data);
     let markup = ReactDOMServer.renderToString(React.createElement(TodoBox, {data}));

     res.setHeader('Content-Type', 'text/html');

     let html = ReactDOMServer.renderToStaticMarkup(body(null,
         div({id: 'app', dangerouslySetInnerHTML: {__html: markup}}),
         script({
             id: 'initial-data',
             type: 'text/plain',
             'data-json': initialData
         }),
         script({src: '/bundle.js'})
     ));

     res.end(html);
 });

app.listen(app.get('port'), () => {});
