import Categories from './Categories'
import Banner from './Banner'
import Hero from './Hero'
import TrendProduct from '../shop/TrendProduct'
import DealsSection from '../shop/DealsSection'

export default function Home() {
  return (
    <>
        <Banner/>
        <Categories />
        <Hero />
        <TrendProduct />
        <DealsSection />
    </>
  )
}
