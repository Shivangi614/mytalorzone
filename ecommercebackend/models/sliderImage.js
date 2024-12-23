const mongoose = require('mongoose');

const sliderImageSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true },
    caption: { type: String },
    order: { type: Number, default:0 }, 
},{timestamps:true});
module.exports= mongoose.model('sliderImage', sliderImageSchema);

