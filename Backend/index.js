require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const post = process.env.Post_SomethingBrand || 5000;


//middleware setup
app.use(express.json({limit: '30mb'}));
app.use(express.urlencoded({limit: '30mb'}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Add error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        message: 'Something broke!',
        error: err.message 
    });
});

// Update CORS to match your frontend URL exactly
app.use(cors({
origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
}));

// all routes
const authRoutes = require('./src/users/user.route');
const productRoutes = require('./src/products/product.route')
app.use('/api/auth', authRoutes);
app.use('/api/product',productRoutes)

// connect to mongodb
main()
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.Database_SomethingBrand);
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(post, () => {
    console.log(`Example app listening on port http://localhost:${post}`);
});