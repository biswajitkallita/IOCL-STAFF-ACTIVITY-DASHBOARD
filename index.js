const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/iocl', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

const employeeRoutes = require('./routes/employees');
const loginRoute = require('./routes/login');

app.use('/api/employees', employeeRoutes);
app.use('/api/login', loginRoute);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
