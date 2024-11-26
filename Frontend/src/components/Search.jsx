import { useState } from "react"
import { products } from "../data"
import { FaSearch } from "react-icons/fa";
import ProductCard from "../pages/shop/ProductCard";

export default function Search() {
    const [searchQuery, setSearchQuery] = useState('')
    const [ fillteredProducts ,setFillteredProducts] = useState(products)

    const handleSearch = () => {
        const query = searchQuery.toLowerCase()

        const filltered = products.filter(
            (product) => product.name.toLowerCase().includes(query)
                || product.description.toLowerCase().includes(query)
                || product.category.toLowerCase().includes(query)
            )

        setFillteredProducts(filltered)
    }

    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">Search Product</h2>
                <p className="section__subheader"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </section>
            <section className="section__container">
                <div className="w-full mb-12 flex flex-col md:flex-row gap-4 justify-center">
                    <input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text" 
                    placeholder="Search for Products..." 
                    className="search-bar w-full max-w-4xl p-2 border rounded"
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch()
                        }
                    }}
                    />
                    <button className="text-white items-center search-button w-full md:w-auto h-auto py-2 px-8 bg-primary flex ">
                        Search
                        <FaSearch size={15} className="ml-3" />
                    </button>
                </div>
                <ProductCard products={fillteredProducts} />
            </section>
        </>

    )
}
