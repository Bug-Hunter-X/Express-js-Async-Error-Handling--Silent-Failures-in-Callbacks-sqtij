const express = require('express');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.send(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve({ message: 'Data fetched successfully!' });
      } else {
        reject(new Error('Failed to fetch data'));
      }
    }, 1000);
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});