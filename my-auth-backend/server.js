const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const dbPath = path.join(__dirname, 'db.json');

app.use(cors());
app.use(bodyParser.json());

// Helper function to read from the 'database' file
const readDb = () => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // file does not exist, return a default structure
      return { users: [] };
    }
    console.error("Error reading database:", err);
    return { users: [] };
  }
};

// Helper function to write to the 'database' file
const writeDb = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};

// Endpoint to get all users (for checking if an email exists)
app.get('/users', (req, res) => {
  const db = readDb();
  res.json(db.users);
});

// Endpoint for user sign up
app.post('/signup', (req, res) => {
  const newUser = req.body;
  const db = readDb();

  // Check if user already exists
  const userExists = db.users.some(user => user.email === newUser.email);
  if (userExists) {
    return res.status(409).json({ message: 'Email already exists' });
  }

  // Add a unique ID and creation timestamp
  const newUserData = {
    ...newUser,
    id: Math.random().toString(36).substring(2, 6),
    createdAt: new Date().toISOString()
  };

  db.users.push(newUserData);
  writeDb(db);

  console.log("✅ New user signed up:", newUser.email);
  res.status(201).json(newUserData);
});

// Endpoint for user sign in
app.post('/signin', (req, res) => {
  const { email, password } = req.body;
  const db = readDb();

  const user = db.users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({ message: 'Email not found' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Incorrect password' });
  }

  console.log("✅ Logged in:", user.email);
  res.status(200).json(user);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});