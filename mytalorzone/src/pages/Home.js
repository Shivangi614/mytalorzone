import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Home.css";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const fetchSliderImages = async () => {
      try {
          const response = await axios.get("http://localhost:5000/slider-images");
          setImages(response.data.images);
      } catch (error) {
          console.error("Error fetching slider images:", error);
      }
  };

  fetchSliderImages();

    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/get-product"); // Update URL if needed
        setProducts(response.data.products);
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval
}, [images]);


  if (loading) {
    return <div className="loading">Loading products...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-container">
      <Header/>
      <div className="slider">
      {images.map((image, index) => (
                <div
                    key={index}
                    className={`slide ${index === currentIndex ? "active" : ""}`}
                    style={{
                        backgroundImage: `url(${image.imageUrl})`,
                    }}
                >
                    <div className="slide-content">
                        <h2>{image.title}</h2>
                        <p>{image.description}</p>
                    </div>
                </div>
            ))}

            <button
                className="prev"
                onClick={() =>
                    setCurrentIndex(
                        currentIndex === 0 ? images.length - 1 : currentIndex - 1
                    )
                }
            >
                &#10094;
            </button>
            <button
                className="next"
                onClick={() =>
                    setCurrentIndex(
                        currentIndex === images.length - 1 ? 0 : currentIndex + 1
                    )
                }
            >
                &#10095;
            </button>
      </div>

      <main>
        <section className="products-section">
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product._id} className="product-card">
                <img
                    src={product.image || "placeholder.jpg"}
                    alt={product.name}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h2 className="product-name">{product.name}</h2>
                    <p className="product-price">Price: ${product.price}</p>
                    <button className="add-to-cart-button">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-products">No products available at the moment.</p>
          )}
        </section>
      </main>
<Footer/>
      
    </div>
  );
};

export default Home;
