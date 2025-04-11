const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/spartan', (req, res) => {
  res.json({ message: 'Spartan API is working!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));