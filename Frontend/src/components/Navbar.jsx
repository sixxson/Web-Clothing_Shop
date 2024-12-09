import { ArrowRight, ChevronDown, Search, ShoppingBasket } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ComponentCart from '../pages/shop/ComponentCart'
import { userDropDownMenus, adminDropDownMenus } from '../utils/baseUrl'
import { logout } from '../redux/features/auths/authSlice'
import { useLogoutMutation } from '../redux/features/auths/AuthApi'

export default function Navbar() {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.products)
    const { user } = useSelector((state) => state.auth)
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Trạng thái mở/đóng menu
    const [logoutUser] = useLogoutMutation()
    const navigator = useNavigate()
    const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus]
    console.log(user);
    
    const handleCartToggle = () => { setIsOpenCart(!isOpenCart) }
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle trạng thái
    const handleLogout = async () => {
        try {
            await logoutUser().unwrap()
            dispatch(logout())
            navigator('/')
        } catch (error) {
            console.error("Failed to logout:", error);
        }
    }
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
                        {user && user
                            ? (
                                <div className='relative'>
                                    <div onClick={toggleDropdown}
                                        className={` flex items-center cursor-pointer ${isDropdownOpen ? "bg-slate-100" : "bg-slate-50/30"
                                            }`}>
                                        <img src={user?.profileImage} className='w-10 h-10 rounded-full object-cover'
                                            alt="" />
                                        <ChevronDown size={20}
                                            className={`transform transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                                }`} />
                                    </div>
                                    {
                                        dropdownMenus && (
                                            <div className={`absolute bg-white p-4 right-0 mt-3 rounded-lg ${isDropdownOpen ? "flex" : "hidden"
                                                }`}>
                                                <ul className='space-y-2 w-48'>
                                                    {dropdownMenus.map((menu, index) => (
                                                        <li key={index} className='hover:text-primary hover:bg-primary-light rounded-lg p-1'>
                                                            <Link
                                                                onClick={() => setIsDropdownOpen(false)}
                                                                className='dropdown-items' to={menu.path}>{menu.lable}</Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link onClick={handleLogout} className='dropdown-items' >Logout</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                            : (<Link to="/login" className='flex items-center text-lg '>
                                Login <ArrowRight size={20} />
                            </Link>)
                        }
                    </span>
                </div>
            </nav>
            {isOpenCart &&
                <ComponentCart products={products} isOpen={isOpenCart} isClose={handleCartToggle} />
            }
        </header>
    );
}