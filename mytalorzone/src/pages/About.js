
import React from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/About.css";


const About = () => {
  return (
    <div className="about-container">
    <Header/>
<hr></hr>
<h1>About Mytalorzone by Sahiba</h1>
<section class="about-section">
        <p>At <strong>Mytalorzone by Sahiba</strong>, we believe that every girl deserves to express herself through clothing that is as unique and creative as she is. Our brand is dedicated to offering a wide variety of fashion-forward styles that blend tradition with modernity, making sure there’s something for every occasion.</p>
        
        <h2>Our Vision</h2>
        <p>Our vision is to empower young women around the world to embrace their individuality and feel confident in their own skin. Whether it’s a casual day out, a special celebration, or a traditional festivity, we strive to provide you with clothing that speaks to your personal style and makes you feel your best.</p>

        <h2>Our Collections</h2>
        <p><strong>Mytalorzone by Sahiba</strong> brings you an exciting range of clothing that includes:</p>
        <ul>
            <li><strong>Traditional Wear</strong>: Celebrate the timeless beauty of tradition with our collection of ethnic outfits that offer a contemporary twist.</li>
            <li><strong>Western Styles</strong>: For those who love modern trends, our Western collection includes everything from casual wear to chic, elegant pieces.</li>
            <li><strong>Trendy Pieces</strong>: Always staying ahead of the fashion curve, our trendy styles combine the latest fashion influences with bold statements.</li>
        </ul>

        <h2>Crafted for Comfort & Style</h2>
        <p>We understand the importance of comfort without compromising on style. Each piece in our collection is carefully crafted with high-quality fabrics, ensuring that our designs are not only stylish but also comfortable to wear.</p>

        <h2>Our Promise</h2>
        <p>At <strong>Mytalorzone by Sahiba</strong>, we promise to offer you:</p>
        <ul>
            <li><strong>Diversity</strong>: A collection that caters to every style, size, and occasion.</li>
            <li><strong>Quality</strong>: Premium fabrics and thoughtful craftsmanship for pieces that last.</li>
            <li><strong>Creativity</strong>: Outfits that reflect the uniqueness and individuality of the modern girl.</li>
        </ul>

        <h2>Join the Mytalorzone Family</h2>
        <p>Thank you for choosing us to be a part of your style journey. We invite you to explore our collections and find the pieces that make you feel beautiful, confident, and ready to take on the world. Every piece you wear from <strong>Mytalorzone by Sahiba</strong> is more than just clothing – it’s a celebration of who you are.</p>
    </section>
    <Footer/>
    </div>
  );
};

export default About;
