import { useState } from "react"
import ProductCard from "./ProductCard"
import ShopFillter from "./ShopFillter"
import { useFetchAllProductsQuery } from "../../redux/features/prducts/productsApi"
import { fillter } from "../../utils/filter"
import { ArrowLeftIcon, ArrowRightIcon, } from "lucide-react"


// const fillter = {
//   categories: ['all', 'accessories', 'dress', 'jewellery', 'cosmetics', 'T-shirt', 'Office Ministry'],
//   color: ['all', 'red', 'blue', 'green', 'black', 'white'],
//   size: ['all', 'S', 'M', 'L', 'XL', 'XXL'],
//   price: [
//     {
//       label: 'Under  $50',
//       min: 0,
//       max: 50
//     },
//     {
//       label: '$50 - $100',
//       min: 50,
//       max: 100
//     },
//     {
//       label: '$100 - $150',
//       min: 100,
//       max: 150
//     },
//     {
//       label: '$150 - $200',
//       min: 150,
//       max: 200
//     },
//     {
//       label: '$200 +',
//       min: 200,
//       max: Infinity
//     }
//   ],
// }
export default function Shop() {

  const [filltersState, setFilltersState] = useState({
    categories: 'all',
    color: 'all',
    price: '',
    sort: '',
  })
  //fillter function

  const [currentPage, setCurrentPage] = useState(1)
  const [ProductPerPage] = useState(8)
  const { category, color, priceRange } = filltersState
  const [minPrice, maxPrice] = priceRange ? priceRange.split('-').map(Number) : [0, Infinity]
  const { data: { products = [], totalPages, totalProducts } = {}, error, isLoading } = useFetchAllProductsQuery({
    category: category !== 'all' ? category : '',
    color: color !== 'all' ? color : '',
    minPrice: isNaN(minPrice) ? '' : minPrice,
    maxPrice: isNaN(maxPrice) ? '' : maxPrice,
    page: currentPage,
    limit: ProductPerPage,
  })

  const clearFillters = () => {
    setFilltersState({
      categories: 'all',
      color: 'all',
      price: '',
    })
  }

  if (isLoading) return <div>loading...</div>
  if (error) return <div>Emty Loading product.</div>

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }


  const startPageProduct = (currentPage - 1) * ProductPerPage + 1
  const endPageProduct = startPageProduct + products.length - 1
  return (
    <div className="pt-20">
      <section className="section__container rounded-lg bg-primary-light">
        <h2 className="section__header capitalize">Shop Pages</h2>
        <p className="section__subheader"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
      </section>
      <section className="section__container ">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8 ">

          {/* left nav */}
          <div>
            <ShopFillter
              filltersState={filltersState}
              setFilltersState={setFilltersState}
              fillter={fillter}
              clearFillters={clearFillters}
            />
          </div>

          {/* right product */}
          <div >
            <h3 className="text-xl font-semibold mb-4">
              Showing {startPageProduct} - {endPageProduct} of {totalProducts} Products
            </h3>
            <div className="min-h-screen">

            <ProductCard products={products} />
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button
                className="hover:text-primary bg-primary text-white hover:bg-slate-50 shadow-md shadow-slate-200 rounded-full p-2"
                onClick={() => handlePageChange(currentPage - 1)}>
                <ArrowLeftIcon />
              </button>
              {[...Array(totalPages)].map((_, i) =>
                <button
                  key={i}
                  className={`${currentPage === i + 1 ? 'bg-primary text-white' : 'bg-slate-50'}
                    hover:bg-primary hover:text-white shadow-md shadow-slate-200 rounded-full px-4 py-2 `}
                  onClick={() => handlePageChange(i + 1)}>
                  {i + 1}
                </button>
              )}
              <button
                className="hover:text-primary bg-primary text-white hover:bg-slate-50 shadow-md shadow-slate-200 rounded-full p-2"
                onClick={() => handlePageChange(currentPage + 1)}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}