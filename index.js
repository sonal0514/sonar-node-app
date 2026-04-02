const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('SonarQube CI/CD Integration');
});
app.listen(3000);
