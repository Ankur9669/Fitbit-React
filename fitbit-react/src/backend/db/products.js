import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// Don't change _id and categoryName
export const products = [
  {
    _id: uuid(),
    productTitle: "Pedal Resistant Elastic",
    discountPercent: "11",
    discountedPrice: Math.round(300 - (11 * 300) / 100),
    realPrice: 300,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product39.jpg?v=1636692074",
    category: "elastics",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productTitle: "Reebok Resistant Tube",
    discountedPrice: Math.round(799 - (15 * 799) / 100),
    realPrice: 799,
    discountPercent: 15,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product38.jpg?v=1636690872",
    category: "elastics",
    rating: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productTitle: "Hand Gloves",
    discountedPrice: Math.round(730 - (14 * 430) / 100),
    realPrice: 430,
    discountPercent: 14,
    productImageUrl:
      "	https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product20.jpg?v=1636623455",
    category: "gloves",
    rating: "3",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productTitle: "Iron Kettlebell",
    discountedPrice: Math.round(515 - (13 * 515) / 100),
    realPrice: 515,
    discountPercent: 13,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product17.jpg?v=1636627241",
    category: "dumbells",
    rating: "2",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productTitle: "Indoor Cycling Bike",
    discountedPrice: Math.round(16599 - (15 * 16599) / 100),
    realPrice: 16599,
    discountPercent: 15,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product16.jpg?v=1636622911",
    category: "equipment",
    rating: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productTitle: "Abs Exercise Equipment",
    discountedPrice: Math.round(20000 - (11 * 20000) / 100),
    realPrice: 20000,
    discountPercent: 11,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product37.jpg?v=1636690723",
    category: "equipment",
    rating: "3",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productTitle: "Dual Adjustable Pulley",
    discountedPrice: Math.round(30999 - (12 * 30999) / 100),
    realPrice: 30999,
    discountPercent: 12,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product12.jpg?v=1637890972",
    category: "equipment",
    rating: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productTitle: "T-Shirts",
    discountedPrice: Math.round(699 - (13 * 699) / 100),
    realPrice: 699,
    discountPercent: 13,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product5.jpg?v=1636620696",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productTitle: "Sports Suit",
    discountedPrice: Math.round(3999 - (19 * 3999) / 100),
    realPrice: 3999,
    discountPercent: 19,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product19.jpg?v=1636623243",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    productTitle: "Full T shirt",
    discountedPrice: Math.round(4999 - (16 * 4999) / 100),
    realPrice: 4999,
    discountPercent: 16,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product15.jpg?v=1636621937",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    productTitle: "Colored Top",
    discountedPrice: Math.round(1099 - (9 * 1099) / 100),
    realPrice: 1099,
    discountPercent: 9,
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product30.jpg?v=1636627042",
    category: "clothes",
    rating: "4",
    inStock: false,
    fastDelivery: true,
  },
];
