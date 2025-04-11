const express = require('express');
const app = express();

const students = [
  { id: 1, name: "John", gender: "Male", phone: 1234567890 },
  { id: 2, name: "Emily", gender: "Female", phone: 9876543210 },
];

app.use(express.json());

app.get('/api/spartan', (req, res) => {
  res.json(students);
});

// Render requires process.env.PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
