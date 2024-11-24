import ImageBanner from '../../../assets/header.png'
export default function Banner() {
  return (
    <section className="section__container header__container">
        <div className="header__content z-30">
            <h4 className="uppercase">up to 20% discount on</h4>
            <h1> Girl`s Fashion</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Voluptas nisi reprehenderit iure cumque ut, iusto repellat sint laboriosam asperiores 
            minus officiis harum vitae nobis molestias possimus nihil incidunt aliquam magnam.
            </p>
            <button className="uppercase btn"><a href="/shop">explore now</a></button>
        </div>
        <div className="header__img ">
            <img src={ImageBanner} alt="" />
        </div>

    </section>
  )
}
