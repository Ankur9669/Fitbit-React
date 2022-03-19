import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

// Don't change _id and categoryName
export const products = [
  {
    _id: "101",
    productTitle: "Pedal Resistant Elastic",
    discountedPrice: "200",
    realPrice: "300",
    discountPercent: "11",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product39.jpg?v=1636692074",
    category: "elastics",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: "108",
    productTitle: "Reebok Resistant Tube",
    discountedPrice: "500",
    realPrice: "799",
    discountPercent: "15",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product38.jpg?v=1636690872",
    category: "elastics",
    rating: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: "102",
    productTitle: "Hand Gloves",
    discountedPrice: "320",
    realPrice: "430",
    discountPercent: "14",
    productImageUrl:
      "	https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product20.jpg?v=1636623455",
    category: "gloves",
    rating: "3",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: "103",
    productTitle: "Iron Kettlebell",
    discountedPrice: "450",
    realPrice: "515",
    discountPercent: "13",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product17.jpg?v=1636627241",
    category: "dumbells",
    rating: "2",
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: "104",
    productTitle: "Indoor Cycling Bike",
    discountedPrice: "14999",
    realPrice: "16599",
    discountPercent: "15",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product16.jpg?v=1636622911",
    category: "equipment",
    rating: "5",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: "105",
    productTitle: "Abs Exercise Equipment",
    discountedPrice: "16999",
    realPrice: "20000",
    discountPercent: "18",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product37.jpg?v=1636690723",
    category: "equipment",
    rating: "3",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: "110",
    productTitle: "Dual Adjustable Pulley",
    discountedPrice: "25799",
    realPrice: "30999",
    discountPercent: "43",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product12.jpg?v=1637890972",
    category: "equipment",
    rating: "5",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: "106",
    productTitle: "T-Shirts",
    discountedPrice: "499",
    realPrice: "699",
    discountPercent: "11",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product5.jpg?v=1636620696",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: "107",
    productTitle: "Sports Suit",
    discountedPrice: "1099",
    realPrice: "3999",
    discountPercent: "62",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product19.jpg?v=1636623243",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: "111",
    productTitle: "Full T shirt",
    discountedPrice: "1299",
    realPrice: "4999",
    discountPercent: "68",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product15.jpg?v=1636621937",
    category: "clothes",
    rating: "4",
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: "109",
    productTitle: "Colored Top",
    discountedPrice: "799",
    realPrice: "1099",
    discountPercent: "45",
    productImageUrl:
      "https://cdn.shopify.com/s/files/1/0610/2882/7370/products/product30.jpg?v=1636627042",
    category: "clothes",
    rating: "4",
    inStock: false,
    fastDelivery: true,
  },
];
