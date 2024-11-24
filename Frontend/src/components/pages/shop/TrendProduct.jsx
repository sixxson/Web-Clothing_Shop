import { useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "../../../data";

export default function TrendProduct() {
  const [visibleProduct, setVisibleProduct] = useState(8);

  const loadMoreProduct = () => {
    setVisibleProduct(prev => prev + 4);
  }

  const showLessProduct = () => {
    setVisibleProduct(8);
  }

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'> Trending Products</h2>
      <p className='section__subheader mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur discover the latest trends and styles in fashion.
        Explore the latest fashion trends and styles in our collection of trendy clothing, accessories, and more. Product images are for illustrative purposes only and may differ from the actual product.
      </p>
      {/* products card */}
      <div className="mt-12">
        <ProductCard products={products.slice(0, visibleProduct)} />
      </div>
      {/* load more product button */}
      <div className="mt-12 flex justify-center">
        {visibleProduct < products.length && (
          <button onClick={loadMoreProduct} className='btn'>
            Load More
          </button>
        )} 
        {visibleProduct > 8 && (
          <button onClick={showLessProduct} className='btn'>
            Show Less
          </button>
        )}
      </div>
    </section>
  )
}
