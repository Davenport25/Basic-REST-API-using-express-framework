// Import the express library
express = require('express');

// Create an instance of an Express application
app = express();

// Define a port number
PORT = 7000;

// Define a simple endpoint that returns a list of names
app.get('/api/names', (req, res) => {
  names = [
    { id: 1, name: 'Bolade' },
    { id: 2, name: 'Idrees' },
    { id: 3, name: 'Oyindamola' },
  ];
  
  // Send the names as a JSON response
  res.json({ success: true, data: names });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/api/names`);
});
