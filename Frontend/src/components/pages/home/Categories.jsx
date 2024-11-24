import { categories } from "../../../data";

export default function Categories() {
  return (
    <section>
        <div className="product__grid">
        {categories.map((category, index) => (
          <a href={`/categories/${category.path}`} key={index} className='categories__card'>
            <img src={category.image} alt={category.name} />
            <h4>{category.name}</h4>
          </a>
        ))}
        </div>
    </section>
  )
}
