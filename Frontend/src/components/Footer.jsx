import { FaFacebook, FaInstagram, FaLocationDot, FaPhone, FaYoutube } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import ImageInstagram1 from '../assets/instagram-1.jpg'
import ImageInstagram2 from '../assets/instagram-2.jpg'
import ImageInstagram3 from '../assets/instagram-3.jpg'
import ImageInstagram4 from '../assets/instagram-4.jpg'
import ImageInstagram5 from '../assets/instagram-5.jpg'
import ImageInstagram6 from '../assets/instagram-6.jpg'
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
    const footerNavs = [
        {
            label: "Contact Info",
            items: [
                {
                    name: '123 Main Street, New York, USA',
                    icon: <FaLocationDot />,
                },
                {
                    icon: <IoMail />,
                    name: 'info@company.com',
                },
                {
                    icon: <FaPhone />,
                    name: '+1 123 456 7890',
                },
            ],
        },
        {
            label: "Company",
            items: [
                {
                    href: '/',
                    name: 'Home'
                },
                {
                    href: '/about',
                    name: 'About'
                },
                {
                    href: '/Contact',
                    name: 'Work With Us'
                },
                {
                    href: '/blog',
                    name: 'Our  Blog'
                },
                {
                    href: '/',
                    name: 'Contact'
                }
            ],
        },
        {
            label: "useful links",
            items: [
                {
                    href: '#',
                    name: 'Help'
                },
                {
                    href: '#',
                    name: 'Track My Order'
                },
                {
                    href: '#',
                    name: 'Men'
                },
                {
                    href: '#',
                    name: 'Women'
                },
                {
                    href: '#',
                    name: 'Kids'
                }
            ]
        }
    ]
    return (
        <footer className="text-gray-500 bg-white px-4 py-5 max-w-screen-xl mx-auto md:px-8 ">
            <div className="gap-6 justify-between md:flex items-center">
                <div className="flex flex-col gap-3" >
                    <div className="max-w-xs ">
                        <div className="nav__logo">
                            <a href="/"> Logo <span>SomeThing</span></a>
                            <p className="leading-relaxed mt-2 text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="footer__col">
                        <div className="instagram__grid">
                            <img src={ImageInstagram1} alt="" />
                            <img src={ImageInstagram2} alt="" />
                            <img src={ImageInstagram3} alt="" />
                            <img src={ImageInstagram4} alt="" />
                            <img src={ImageInstagram5} alt="" />
                            <img src={ImageInstagram6} alt="" />
                        </div>
                    </div>
                </div>
                <div className="flex-1 footer__container">
                    {
                        footerNavs.map((item, idx) => (
                            <div
                                className="footer__col space-y-4"
                                key={idx}
                            >
                                <h4 className="text-lg uppercase font-medium text-black">
                                    {item.label}
                                </h4>
                                {
                                    item.items.map(((el, idx) => (
                                        <p key={idx}>
                                            <a href={el.href} className="flex flex-row items-center gap-2">
                                                <span>
                                                    {el.icon}
                                                </span>
                                                {el.name}
                                            </a>
                                        </p>
                                    )))
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <FaFacebook size={20} className="text-blue-600" />
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <FaInstagram size={20} className="rounded-lg bg-gradient-to-tr from-pink-500 to-orange-400 text-white" />
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <BsTwitterX size={20} className="text-black" />
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="#">
                                <FaYoutube size={20} className="text-red-600" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
