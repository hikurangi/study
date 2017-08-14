var express = require('express');
var app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

let data = [
  {
    title: 'Shopping',
    detail: process.argv[3]
  },
  {
    title: 'Haircut',
    detail: process.argv[4]
  }
]

app.use('/', (req, res) => {
  res.render('index', {data});
});

app.listen(app.get('port'), () => {});
