const express = require('express');
const connectToDatabase = require('./config/connectdb');
const dht22Routes = require('./routes/dht22');
const piezzoRoutes = require('./routes/piezzo');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

app.use(cors());

// Jika ingin lebih spesifik:
app.use(
    cors({
        origin: 'https://rc-tank-f4.vercel.app', // Ganti dengan domain frontend Anda
        methods: ['GET', 'POST'],
        credentials: true, // Jika perlu cookie atau header tertentu
    })
);

// Connect to database
connectToDatabase();

// Routes
app.use('/api/dht22', dht22Routes);
app.use('/api/piezzo', piezzoRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
