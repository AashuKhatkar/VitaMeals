const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static('public'));

// File upload endpoint
app.post('/upload', upload.single('report'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  // Simulate processing delay (3 seconds)
  setTimeout(() => {
    res.json({
      deficiencies: ['Vitamin D', 'Iron'],
      recommendations: [
        'Take Vitamin D supplements daily.',
        'Eat more leafy greens like spinach.',
      ],
    });
  }, 3000);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});