export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
    stock: number;
  }
  
  export const products: IProduct[] = [
    {
      id: 1,
      title: "Classic White Sneakers",
      price: 79.99,
      description: "Minimalist design sneakers perfect for everyday wear. Features comfortable cushioning and durable rubber sole.",
      category: "Footwear",
      image: "https://cdn.thewirecutter.com/wp-content/media/2024/05/white-sneaker-2048px-9338.jpg?auto=webp&quality=75&width=1024",
      rating: {
        rate: 4.5,
        count: 120
      },
      stock: 25
    },
    {
      id: 2,
      title: "Vintage Denim Jacket",
      price: 89.99,
      description: "Classic denim jacket with a worn-in look. Features brass buttons and multiple pockets.",
      category: "Outerwear",
      image: "https://www.dant.us/cdn/shop/files/orslow-01-6005-83-1960s-type-iii-denim-jacket-vintage-used-wash-1.jpg?v=1705636595&width=1200",
      rating: {
        rate: 4.8,
        count: 95
      },
      stock: 15
    },
    {
      id: 3,
      title: "Smart Watch Pro",
      price: 199.99,
      description: "Advanced smartwatch with health tracking, notifications, and 5-day battery life.",
      category: "Electronics",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIyUEf0U1qnUZUWIeFI8l8zokI5ncTPzr2lw&s",
      rating: {
        rate: 4.6,
        count: 230
      },
      stock: 40
    },
    {
      id: 4,
      title: "Leather Messenger Bag",
      price: 129.99,
      description: "Handcrafted leather messenger bag with laptop compartment and multiple organizer pockets.",
      category: "Accessories",
      image: "https://www.goforthgoods.com/cdn/shop/products/stephen-messenger-saddle-angle-web.jpg?v=1603913784&width=1946",
      rating: {
        rate: 4.7,
        count: 85
      },
      stock: 12
    },
    {
      id: 5,
      title: "Wireless Earbuds",
      price: 149.99,
      description: "True wireless earbuds with active noise cancellation and 24-hour battery life with charging case.",
      category: "Electronics",
      image: "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/solo-buds/pdp/product-carousel/matte-black/black-01-solobuds.jpg",
      rating: {
        rate: 4.4,
        count: 175
      },
      stock: 30
    },
    {
      id: 6,
      title: "Cotton Graphic T-Shirt",
      price: 24.99,
      description: "100% organic cotton t-shirt with original artwork print. Available in multiple sizes.",
      category: "Clothing",
      image: "https://n.nordstrommedia.com/it/82377998-58ef-4f84-8401-9be2a716485a.jpeg?h=365&w=240&dpr=2",
      rating: {
        rate: 4.3,
        count: 88
      },
      stock: 50
    },
    {
      id: 7,
      title: "Stainless Steel Water Bottle",
      price: 34.99,
      description: "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours.",
      category: "Accessories",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAS-X19ULPnLn5QD0URpyKFWyElw9eY_rWqQ&s",
      rating: {
        rate: 4.9,
        count: 150
      },
      stock: 35
    },
    {
      id: 8,
      title: "Yoga Mat Premium",
      price: 45.99,
      description: "Extra thick eco-friendly yoga mat with alignment lines and carrying strap.",
      category: "Fitness",
      image: "https://gofit.net/cdn/shop/products/GF-2XYOGA_PO2_1000x.jpg?v=1583354287",
      rating: {
        rate: 4.6,
        count: 95
      },
      stock: 20
    },
    {
      id: 9,
      title: "Mechanical Keyboard",
      price: 129.99,
      description: "RGB mechanical gaming keyboard with customizable switches and multimedia controls.",
      category: "Electronics",
      image: "https://m.media-amazon.com/images/I/71T1WQSxp9L.jpg",
      rating: {
        rate: 4.7,
        count: 200
      },
      stock: 15
    },
    {
      id: 10,
      title: "Scented Candle Set",
      price: 39.99,
      description: "Set of 3 hand-poured soy wax candles in seasonal fragrances.",
      category: "Home",
      image: "https://hudsongracesf.com/cdn/shop/files/NewYorkCandleBundle.png?v=1711042896",
      rating: {
        rate: 4.8,
        count: 65
      },
      stock: 28
    }
  ];