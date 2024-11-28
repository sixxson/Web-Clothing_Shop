import { useEffect, useState } from "react"
import { categories, productData } from "../../data"
import ProductCard from "./ProductCard"
import ShopFillter from "./ShopFillter"


const fillter = {
  categories: ['all', ...categories.map(category => category.name)],
  color: ['all', 'red', 'blue', 'green', 'black', 'white'],
  size: ['all', 'S', 'M', 'L', 'XL', 'XXL'],
  price: [
    {
      label: 'Under  $50',
      min: 0,
      max: 50
    },
    {
      label: '$50 - $100',
      min: 50,
      max: 100
    },
    {
      label: '$100 - $150',
      min: 100,
      max: 150
    },
    {
      label: '$150 - $200',
      min: 150,
      max: 200
    },
    {
      label: '$200 +',
      min: 200,
      max: Infinity
    }
  ],
}
export default function Shop() {

  const [products, setProducts] = useState(productData)
  const [filltersState, setFilltersState] = useState({
    categories: 'all',
    color: 'all',
    size: 'all',
    price: '',
    sort: '',
  })
  //fillter function
  const applyFillters = () => {
    let tempProducts = productData
    //fillter by category
    if (filltersState.categories && filltersState.categories !== 'all') {
      tempProducts = tempProducts.filter(product => product.category === filltersState.categories)
    }
    ///fillter by color
    if (filltersState.color && filltersState.color !== 'all') {
      tempProducts = tempProducts.filter(product => product.color === filltersState.color)
    }
    //fillter by size
    if (filltersState.size && filltersState.size !== 'all') {
      tempProducts = tempProducts.filter(product => product.size === filltersState.size)
    }
    //fillter by price
    if (filltersState.price) {
      tempProducts = tempProducts.filter(product => {
        const selectedPrice = fillter.price.find(price => price.label === filltersState.price)
        return selectedPrice && product.price >= selectedPrice.min && product.price <= selectedPrice.max
      })
    }
    setProducts(tempProducts)
  }
  useEffect(() => {
    applyFillters()
  }, [filltersState])

  const clearFillters = () => {
    setFilltersState({
      categories: 'all',
      color: 'all',
      size: 'all',
      price: '',
    })
  }


  return (
    <>
      <section className="section__container rounded-lg bg-primary-light">
        <h2 className="section__header capitalize">Shop Pages</h2>
        <p className="section__subheader"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
      </section>
      <section className="section__container ">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8 ">

          {/* left nav */}
          <div className="">
            <ShopFillter
              filltersState={filltersState}
              setFilltersState={setFilltersState}
              fillter={fillter}
              clearFillters={clearFillters}
            />
          </div>

          {/* right product */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Product Avaible {products.length}
            </h3>
            <ProductCard products={products} />
          </div>
        </div>
      </section>
    </>
  )
}
