"use client"
import {Search, ShoppingBagIcon, User2Icon} from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    return (
        <header className='fixed-nav-bar w-nav'>
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
                        <a className='flex items-center cursor-pointer' onClick={() => setShowSearch(!showSearch)}>
                            <Search />
                        </a>
                        {showSearch && (
                            <div className="absolute left-14 top-0 w-64">
                                <input 
                                    type="text"
                                    placeholder="Search products..."
                                    className="w-full p-2 border rounded-md shadow-sm"
                                />
                            </div>
                        )}
                    </span>
                    <span>
                        <button className='hover:text-primary relative'>
                        <sup className='text-sm inline-block px-1.5 absolute left-4 text-white rounded-full
                        bg-primary text-center'>0</sup>
                        <ShoppingBagIcon className='mt-2' />
                        </button>
                    </span>
                    <span>
                        <a href="/login">
                            <User2Icon />
                        </a>
                    </span>
                </div>
            </nav>
        </header>
    )
}
