require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('./main.scss');
//require('bootstrap');

var Mainview = require('./components/Mainview.jsx');

React.render(<Mainview />, document.getElementById('app'));
