// const express = require('express');
// const slider = require('./models/slider'); // Import the Slider model
// const router = express.Router();

// router.post('/add-slider-images', async (req, res) => {
//   console.log('Request received for adding slider images:', req.body);
//     try {
//       const { images } = req.body; // Array of images [{ imageUrl, caption, order }]
  
//       const insertedImages = await sliderImage.insertMany(images);
  
//       res.status(201).json({
//         success: true,
//         message: 'Slider images added successfully',
     
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: 'Error adding slider images',
//         error: error.message,
//       });
//     }
//   });
// // Endpoint to fetch slider images
// router.get('/get-slider-images', async (req, res) => {
//     try {
//         const images = await sliderImage.find().sort({ order: 1 });
    
//         res.status(200).json({
//           success: true,
//           data: images,
//         });
//       } catch (error) {
//         res.status(500).json({
//           success: false,
//           message: 'Error fetching slider images',
//           error: error.message,
//         });
//       }
//     });
    

// module.exports = router;
// routes/slider.js
const express = require('express');
const SliderImage = require('../models/sliderImage');
const router = express.Router();

router.post('/add-slider-images', async (req, res) => {
  try {
    const { images } = req.body; // Accept an array of images from the request body

    // Check if images is an array and not empty
    if (!images || !Array.isArray(images) || images.length === 0) {
      return res.status(400).json({ success: false, message: "Images array is required and cannot be empty." });
    }

    // Validate each image object structure
    images.forEach((image, index) => {
      if (!image.imageUrl || typeof image.imageUrl !== 'string') {
        return res.status(400).json({ success: false, message: `Image ${index + 1} is missing 'imageUrl' or it's not a string.` });
      }
      if (image.caption && typeof image.caption !== 'string') {
        return res.status(400).json({ success: false, message: `Image ${index + 1} 'caption' is not a valid string.` });
      }
      if (image.order && typeof image.order !== 'number') {
        return res.status(400).json({ success: false, message: `Image ${index + 1} 'order' is not a valid number.` });
      }
    });

    const result = await SliderImage.insertMany(images);
    res.status(201).json({ success: true, message: "Slider images added successfully", data: result });
  } catch (error) {
    console.error('Error during POST:', error); // Log the full error for debugging
    res.status(500).json({ success: false, message: "Error adding slider images", error: error.message });
  }
});


module.exports = router;
