const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Asynchronously fetching data
  getData((data) => {
    if (data) {
      res.send(data);
    } else {
      res.status(500).send('Error fetching data');
    }
  });
});

function getData(callback) {
  // Simulate an asynchronous operation that sometimes fails
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      callback({ message: 'Data fetched successfully!' });
    } else {
      callback(null); // This is where the error is
    }
  }, 1000);
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});