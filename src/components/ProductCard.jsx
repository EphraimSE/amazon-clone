import "./ProductCard.css";

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src="image.jpg" />
      <h3>Wireless Headphones</h3>
      <p>R24.99</p>
      <button>Add to Cart</button>
     
        {/* <div className="home_container">
            <h1>A bunch of category product cards will load from here</h1>
            <h2>More product cards lof here</h2>
            <h2>Some more product cards again</h2>
        </div>
         */}
    </div> 
  )
}

export default ProductCard;