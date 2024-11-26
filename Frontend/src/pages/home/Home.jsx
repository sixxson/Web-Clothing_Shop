import Categories from './Categories'
import Banner from './Banner'
import Hero from './Hero'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import TrendProduct from '../shop/TrendProduct'
import Blogs from '../blogs/Blogs'

export default function Home() {
  return (
    <>
        <Banner/>
        <Categories />
        <Hero />
        <TrendProduct />
        <DealsSection />
        <PromoBanner />
        <Blogs />
    </>
  )
}
