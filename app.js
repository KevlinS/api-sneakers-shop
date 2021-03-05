require('dotenv/config');
const app = require("./src/services/server.service")
const mongooseService = require('./src/services/mongoose.service');

mongooseService.dbConnect();
app.start();




app.get('/', (req, res) => {
	res.send('hello world');
});


