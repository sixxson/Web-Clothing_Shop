import { useState } from "react";
import ProductCard from "./ProductCard";
import { useFetchAllProductsQuery } from "../../redux/features/prducts/productsApi"


export default function TrendProduct() {
  const [visibleProduct, setVisibleProduct] = useState(8);
  const { data, isLoading, error } = useFetchAllProductsQuery({
    category: '',
    color: '',
    minPrice: 0,
    maxPrice: '',
    page: 1,
    limit: 8
  }) || {};

  const products = data?.products || [];

  const loadMoreProduct = () => {
    setVisibleProduct(prev => prev + 4);
  }

  const showLessProduct = () => {
    setVisibleProduct(8);
  }

  if (isLoading) {
    return <div className="section__container">Loading...</div>;
  }

  if (error) {
    return <div className="section__container">Error: Unable to load products</div>;
  }

  return (
    <section className='section__container product__container'>
      <h2 className='section__header'>Trending Products</h2>
      <p className='section__subheader mb-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur discover the latest trends and styles in fashion.
        Explore the latest fashion trends and styles in our collection of trendy clothing, accessories, and more. Product images are for illustrative purposes only and may differ from the actual product.
      </p>
      <div className="mt-12">
        {products && <ProductCard products={products.slice(0, visibleProduct)} />}
      </div>
      <div className="mt-12 flex justify-center">
        {products && visibleProduct < products.length && (
          <button onClick={loadMoreProduct} className='btn'>
            Load More
          </button>
        )}
        {products && visibleProduct > 8 && (
          <button onClick={showLessProduct} className='btn'>
            Show Less
          </button>
        )}
      </div>
    </section>
  )
}