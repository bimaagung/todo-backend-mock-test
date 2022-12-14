require('dotenv').config();
const app = require('./app');

const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';
const port = process.env.PORT || '5000';

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
