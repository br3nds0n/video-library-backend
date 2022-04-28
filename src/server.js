require('dotenv').config();

const App = require('./App');

async function server() {
  const APP = await App.start();
  const PORT = process.env.PORT_SERVER;

  APP.listen(PORT, () => console.log(`⚡ Backend started at http://localhost:${PORT}`));
}

server();
