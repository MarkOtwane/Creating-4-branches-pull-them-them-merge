// Creating a file in typecript
// Importing the express module 
// and creating an Express application
// This code sets up a basic Express server that listens on port 3000 and responds with "Hello, World!" when accessed at the root URL.
// Importing the express module
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});