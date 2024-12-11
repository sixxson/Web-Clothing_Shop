import category1 from '../assets/category-1.jpg'
import category2 from '../assets/category-2.jpg'
import category3 from '../assets/category-3.jpg'
import category4 from '../assets/category-4.jpg'
import card1 from '../assets/card-1.png'
import card2 from '../assets/card-2.png'
import card3 from '../assets/card-3.png'


export const categories = [
    {
        name: 'accessories',
        path: 'accessories',
        image: category1
    },
    {
        name: 'dress',
        path: 'dress',
        image: category2
    },
    {
        name: 'jewellery',
        path: 'jewellery',
        image: category3
    },
    {
        name: 'cosmetics',
        path: 'cosmetics',
        image: category4
    },
    {
        name: 'T-shirt',
        path: 'T-shirt',
        image: category1
    },
    {
        name: 'Office Ministry',
        path: 'Office Ministry',
        image: category2
    }
]

export const productData = [
    {
        _id:"1",
        name: "Leather Handbag",
        category: "accessories",
        description: "Stylish leather handbag with ample storage space.",
        price: 79.99,
        oldPrice: 99.99,
        image: "https://images.unsplash.com/photo-1512201078372-9c6b2a0d528a?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "black",
        rating: 4.5,
        author: "admin"
    },
    {
        _id:"2",
        name: "Evening Gown",
        category: "dress",
        description: "Elegant evening gown for special occasions.",
        price: 149.99,
        oldPrice: 199.99,
        image: "https://images.unsplash.com/photo-1568251188392-ae32f898cb3b?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "red",
        rating: 4.0
    },
    {
        _id:"3",
        name: "Gold Necklace",
        category: "jewellery",
        description: "Exquisite gold necklace with intricate design.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1631097969294-c38afba59496?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "gold",
        rating: 4.7
    },    {
        _id:"4",
        name: "Matte Lipstick",
        category: "cosmetics",
        description: "Long-lasting matte lipstick in various shades.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "red",
        rating: 4.2
    },    
    {
        _id:"5",
        name: "Silk Scarf",
        category: "accessories",
        description: "Luxurious silk scarf with vibrant colors.",
        price: 29.99,
        oldPrice: 39.99,
        image: "https://images.unsplash.com/photo-1485527691629-8e370684924c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "blue",
        rating: 4.3
    },
    {
        _id:"6",
        name: "Cocktail Dress",
        category: "dress",
        description: "Chic cocktail dress for parties and events.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "black",
        rating: 4.4
    },    
    {
        _id:"7",
        name: "Diamond Earrings",
        category: "jewellery",
        description: "Sparkling diamond earrings that add elegance to any outfit.",
        price: 299.99,
        oldPrice: 349.99,
        image: "https://images.unsplash.com/photo-1587467442586-7bcc51828a10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "silver",
        rating: 4.8
    },
    {
        _id:"8",
        name: "Foundation",
        category: "cosmetics",
        description: "High-coverage foundation for a flawless finish.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1599733589046-10c005739ef9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "beige",
        rating: 4.1
    },    {
        _id:"9",
        name: "Sunglasses",
        category: "accessories",
        description: "Trendy sunglasses with UV protection.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "black",
        rating: 4.6
    },    
    {
        _id:"10",
        name: " ",
        category: "dress",
        description: "Comfortable maxi dress for casual outings.",
        price: 59.99,
        oldPrice: 79.99,
        image: "https://plus.unsplash.com/premium_photo-1664298355914-bc65d2c9af64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        color: "green",
        rating: 4.2
    }
]

export const blogs = [
    {
        title: "Mastering the Art of Capsule Wardrobes",
        subtitle: "Timeless Elegance",
        date: "12th August 2022",
        imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Unveiling the Hottest Beachwear Trends",
        subtitle: "Summer Breeze",
        date: "18th January 2023",
        imageUrl: "https://images.unsplash.com/photo-1700159017572-de76bb0c5719?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "Navigating the World of Women's Tailoring",
        subtitle: "Power Dressing",
        date: "5th January 2025",
        imageUrl: "https://plus.unsplash.com/premium_photo-1682142715511-27bfbfdc044f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title: "The World's Best Fashion Fair 2025",
        subtitle: "New York Times",
        date: "25th May 2025",
        imageUrl: "https://plus.unsplash.com/premium_photo-1713720663924-4e3fe8f20f79?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]   

export const cards = [
    {
        image: card1,
        trend: '2024 Trend' ,
        title: 'Women Shirts',
    },
    {
        image: card2,
        trend: '2024 Trend' ,
        title: 'Women Dresses',
    },
    {
        image: card3,
        trend: '2024 Trend' ,
        title: 'Women Casuuals',
    }
]

