const express = require('express');
const app = express();

// Middleware to serve static files like CSS
app.use(express.static('css'));

// Middleware to serve static files for images
app.use('/images', express.static('images')); // Add this line to serve the "images" folder

// Set view engine to EJS
app.set('view engine', 'ejs');

// Define route for homepage
app.get('/', (req, res) => {
    const products = [
        { name: "Backpack 1", description: "Durable and stylish backpack.", image: "images/backpackbanner1.jpg" }, // Update to use your static folder
        { name: "Backpack 2", description: "Comfortable and spacious backpack for travelers.", image: "https://via.placeholder.com/300x300" },
    ];

    const testimonials = [
        { message: "Amazing quality and design!", author: "Alex J." },
        { message: "Fast delivery and excellent service!", author: "Maria S." },
    ];

    res.render('index', { title: "Backpack Store", products, testimonials });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
