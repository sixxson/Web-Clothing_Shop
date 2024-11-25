import { blogs } from '../../../data'

export default function Blogs() {
    return (
        <section className='section__container blog__container'>
            <h2 className='section__header'>
                Latest From Blog
            </h2>
            <p className="section__subheader ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-10'>
                {blogs.map((blog, i)=>(
                    <div key={i} 
                    className="blog__card cursor-pointer hover:scale-105 transition-all duration-300">
                        <img src={blog.imageUrl} alt={blog.title} />
                        <h6>{blog.subtitle}</h6>
                        <h4>{blog.title}</h4>
                        <p>{blog.date}</p>
                    </div>
                ))
                }
            </div>
        </section>
    )
}
