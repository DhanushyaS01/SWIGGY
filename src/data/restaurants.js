export const CATEGORIES = [
  { id: 1, name: "Pizza", emoji: "🍕", bg: "#fff3e0" },
  { id: 2, name: "Burger", emoji: "🍔", bg: "#fce4ec" },
  { id: 3, name: "Biryani", emoji: "🍛", bg: "#e8f5e9" },
  { id: 4, name: "Rolls", emoji: "🌯", bg: "#e3f2fd" },
  { id: 5, name: "Dosa", emoji: "🥞", bg: "#f3e5f5" },
  { id: 6, name: "Noodles", emoji: "🍜", bg: "#fff8e1" },
  { id: 7, name: "Sandwich", emoji: "🥪", bg: "#e0f2f1" },
  { id: 8, name: "Idli", emoji: "🥣", bg: "#fbe9e7" },
  { id: 9, name: "Pasta", emoji: "🍝", bg: "#ede7f6" },
  { id: 10, name: "Ice Cream", emoji: "🍦", bg: "#e1f5fe" },
  { id: 11, name: "Shake", emoji: "🥤", bg: "#e8eaf6" },
  { id: 12, name: "Cake", emoji: "🎂", bg: "#fce4ec" },
];

export const RESTAURANTS = [
  {
    id: 1,
    name: "Pizza Hut",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=250&fit=crop",
    rating: 4.3,
    time: "30-40 min",
    cuisine: ["Pizza", "Fast Food"],
    price: 600,
    isOpen: true,
    offer: "50% off up to ₹100",
    loc: "Koramangala",
    menu: [
      {
        cat: "Recommended",
        items: [
          { id: 101, name: "Margherita Pizza", price: 299, desc: "Classic with 100% real mozzarella cheese", img: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=200&h=200&fit=crop", veg: true },
          { id: 102, name: "Pepperoni Pizza", price: 399, desc: "Loaded with spicy pepperoni and mozzarella", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop", veg: false },
          { id: 103, name: "BBQ Chicken Pizza", price: 449, desc: "Smoky BBQ sauce with grilled chicken", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", veg: false },
        ],
      },
      {
        cat: "Sides & Drinks",
        items: [
          { id: 104, name: "Garlic Bread", price: 129, desc: "Crispy garlic bread with herb butter", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=200&h=200&fit=crop", veg: true },
          { id: 105, name: "Pepsi 500ml", price: 69, desc: "Chilled pepsi to go with your pizza", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=200&h=200&fit=crop", veg: true },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "McDonald's",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=250&fit=crop",
    rating: 4.2,
    time: "20-30 min",
    cuisine: ["Burger", "Fast Food"],
    price: 400,
    isOpen: true,
    offer: "Free McSaver Meal",
    loc: "Indiranagar",
    menu: [
      {
        cat: "Burgers",
        items: [
          { id: 201, name: "McAloo Tikki", price: 99, desc: "Spiced potato patty — a global icon made for India", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop", veg: true },
          { id: 202, name: "Chicken McGrill", price: 149, desc: "Grilled chicken burger with fresh lettuce & mayo", img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=200&h=200&fit=crop", veg: false },
          { id: 203, name: "Big Mac", price: 199, desc: "Two beef patties with special sauce & lettuce", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", veg: false },
        ],
      },
      {
        cat: "Sides",
        items: [
          { id: 204, name: "French Fries Large", price: 129, desc: "Crispy golden fries, perfectly salted", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=200&h=200&fit=crop", veg: true },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Biryani Blues",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=250&fit=crop",
    rating: 4.5,
    time: "40-50 min",
    cuisine: ["Biryani", "North Indian"],
    price: 500,
    isOpen: true,
    offer: "20% off above ₹500",
    loc: "HSR Layout",
    menu: [
      {
        cat: "Biryani",
        items: [
          { id: 301, name: "Chicken Dum Biryani", price: 349, desc: "Slow-cooked aromatic basmati with tender chicken", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop", veg: false },
          { id: 302, name: "Veg Biryani", price: 249, desc: "Fragrant basmati with fresh seasonal vegetables", img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop", veg: true },
          { id: 303, name: "Mutton Biryani", price: 449, desc: "Tender mutton slow-cooked with aromatic spices", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop", veg: false },
        ],
      },
      {
        cat: "Kebabs",
        items: [
          { id: 304, name: "Seekh Kebab (6 pcs)", price: 199, desc: "Minced meat kebabs grilled to perfection", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=200&h=200&fit=crop", veg: false },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Domino's Pizza",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=250&fit=crop",
    rating: 4.1,
    time: "25-35 min",
    cuisine: ["Pizza", "Pasta"],
    price: 550,
    isOpen: true,
    offer: "2 Medium Pizzas ₹599",
    loc: "Whitefield",
    menu: [
      {
        cat: "Pizzas",
        items: [
          { id: 401, name: "Farmhouse Pizza", price: 329, desc: "Capsicum, mushroom and fresh farm veggies", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=200&h=200&fit=crop", veg: true },
          { id: 402, name: "Chicken Dominator", price: 429, desc: "Double pepper barbecue chicken with exotic herbs", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop", veg: false },
        ],
      },
      {
        cat: "Pasta",
        items: [
          { id: 403, name: "Mac & Cheese Pasta", price: 149, desc: "Creamy mac and cheese in white sauce", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&h=200&fit=crop", veg: true },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Subway",
    img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=250&fit=crop",
    rating: 4.0,
    time: "25-30 min",
    cuisine: ["Sandwich", "Salads"],
    price: 350,
    isOpen: false,
    offer: "Buy 2 Get 1 Free",
    loc: "MG Road",
    menu: [
      {
        cat: "Sub Sandwiches",
        items: [
          { id: 501, name: "Veggie Delight", price: 199, desc: "Fresh veggies loaded sub with your choice of sauce", img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=200&h=200&fit=crop", veg: true },
          { id: 502, name: "Chicken Teriyaki", price: 259, desc: "Teriyaki glazed chicken strips with crisp veggies", img: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=200&h=200&fit=crop", veg: false },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "KFC",
    img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=250&fit=crop",
    rating: 4.2,
    time: "35-45 min",
    cuisine: ["Chicken", "Burger"],
    price: 500,
    isOpen: true,
    offer: "20% off on ₹400+",
    loc: "JP Nagar",
    menu: [
      {
        cat: "Fried Chicken",
        items: [
          { id: 601, name: "Original Recipe 2 pc", price: 279, desc: "World-famous crispy chicken with 11 herbs & spices", img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=200&h=200&fit=crop", veg: false },
          { id: 602, name: "Hot & Crispy Burger", price: 199, desc: "Juicy chicken patty in a toasted bun", img: "https://images.unsplash.com/photo-1561758033-7e924f619b47?w=200&h=200&fit=crop", veg: false },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Meghana Foods",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop",
    rating: 4.6,
    time: "45-55 min",
    cuisine: ["Biryani", "South Indian"],
    price: 450,
    isOpen: true,
    offer: "Free Raita with Biryani",
    loc: "Residency Road",
    menu: [
      {
        cat: "Signature Biryani",
        items: [
          { id: 701, name: "Andhra Chicken Biryani", price: 299, desc: "Spicy Andhra-style chicken biryani, a local legend", img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop", veg: false },
          { id: 702, name: "Prawn Biryani", price: 399, desc: "Juicy prawns in fragrant aromatic basmati rice", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=200&h=200&fit=crop", veg: false },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Burger King",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400&h=250&fit=crop",
    rating: 4.0,
    time: "30-40 min",
    cuisine: ["Burger", "Fries"],
    price: 450,
    isOpen: true,
    offer: "Buy 1 Whopper Get 1 Free",
    loc: "Electronic City",
    menu: [
      {
        cat: "Burgers",
        items: [
          { id: 801, name: "Whopper", price: 229, desc: "Flame-grilled beef patty with fresh vegetables", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop", veg: false },
          { id: 802, name: "Veg Whopper", price: 199, desc: "Crispy veggie patty with all the Whopper fixings", img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=200&h=200&fit=crop", veg: true },
        ],
      },
    ],
  },
];

export const DINEOUT = [
  { id: 1, name: "The Black Pearl", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=280&fit=crop", rating: 4.5, cuisine: "Continental", cost: "₹1200 for two" },
  { id: 2, name: "Punjab Grill", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=280&fit=crop", rating: 4.4, cuisine: "North Indian", cost: "₹900 for two" },
  { id: 3, name: "Toscano", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=280&fit=crop", rating: 4.6, cuisine: "Italian", cost: "₹1500 for two" },
  { id: 4, name: "Mainland China", img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=280&fit=crop", rating: 4.3, cuisine: "Chinese", cost: "₹800 for two" },
  { id: 5, name: "Barbeque Nation", img: "https://images.unsplash.com/photo-1544025162-d76538350cef?w=400&h=280&fit=crop", rating: 4.5, cuisine: "Grill & Barbeque", cost: "₹1100 for two" },
];

export const GROCERY = [
  { id: 1, name: "Fresh Vegetables", emoji: "🥦", time: "10 mins" },
  { id: 2, name: "Dairy & Eggs", emoji: "🥚", time: "12 mins" },
  { id: 3, name: "Fruits", emoji: "🍎", time: "8 mins" },
  { id: 4, name: "Snacks", emoji: "🍿", time: "15 mins" },
  { id: 5, name: "Beverages", emoji: "🧃", time: "10 mins" },
  { id: 6, name: "Breakfast", emoji: "🥣", time: "12 mins" },
  { id: 7, name: "Bakery", emoji: "🍞", time: "14 mins" },
  { id: 8, name: "Instant Food", emoji: "🍜", time: "9 mins" },
];
