import { Search, ShoppingBasket, User2Icon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ComponentCart from '../pages/shop/ComponentCart'

export default function Navbar() {

    const [isScrolled, setIsScrolled] = useState(false);

    // Xử lý sự kiện cuộn trang
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup sự kiện khi component bị unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const products = useSelector((state) => state.cart.products)
    const [isOpenCart, setIsOpenCart] = useState(false)
    const handleCartToggle = () => {
        setIsOpenCart(!isOpenCart)
    }

    return (
        <header className={`fixed z-[100] w-full  ${isScrolled ? "bg-primary-light" : "bg-none"} transition-all duration-300 ease-in-out `}>
            <nav className="max-w-screen mx-auto px-4 flex justify-between items-center">
                <ul className="nav__links">
                    <li className='hover:text-primary'><a href="/">Home</a></li>
                    <li className='hover:text-primary'><a href="/shop">Shop</a></li>
                    <li className='hover:text-primary'><a href="/about">About</a></li>
                    <li className='hover:text-primary'><a href="/contact">Contact</a></li>
                </ul>
                {/* logo */}
                <div className="nav__logo">
                    <a href="/"> Something <span>Same</span></a>
                </div>
                {/* nav icon */}
                <div className="nav__icons relative">
                    <span>
                        <Link to='/search' className='flex items-center cursor-pointer' >
                            <Search />
                        </Link>
                    </span>
                    <span>
                        <button
                            onClick={handleCartToggle}
                            className='hover:text-primary relative'>
                            <sup className='text-sm inline-block px-1.5 hi absolute left-4 text-white rounded-full
                            bg-primary text-center'>
                                {products.length}
                            </sup>
                            <ShoppingBasket className='mt-2' />
                        </button>
                    </span>
                    <span>
                        <a href="/login">
                            <User2Icon />
                        </a>
                    </span>
                </div>
            </nav>
            {isOpenCart &&
                    <ComponentCart products={products} isOpen={isOpenCart} isClose={handleCartToggle} />
            }
        </header>
    )
}
