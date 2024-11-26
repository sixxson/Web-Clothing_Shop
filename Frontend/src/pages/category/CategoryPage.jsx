import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { products } from "../../data"
import ProductCard from "../shop/ProductCard"

export default function CategoryPage() {
    const {categoryName } = useParams()
    const [fillteredProducts, setFillteredProducts] = useState([])

    useEffect(() => {
        const filltered = products.filter((product) => product.category === categoryName.toLowerCase());
        setFillteredProducts(filltered)
    }, [categoryName, setFillteredProducts])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            <section className="section__container bg-primary-light">
                <h2 className="section__header capitalize">{categoryName}</h2>
                <p className="section__subheader"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </section>
            <div className="section__container">
                    <ProductCard products={fillteredProducts} />
                </div>
        </>
    )
}