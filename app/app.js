const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = require('express')();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

require('./routes/index')(app);

app.listen(9000, () => console.log('Express has been started...'));