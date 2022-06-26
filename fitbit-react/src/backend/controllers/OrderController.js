import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";

/**
 * All the routes related to orders are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting orders to user's cart.
 * send GET Request at /api/user/orders
 * */
export const getOrderItemsHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  return new Response(200, {}, { orders: userOrders });
};

/**
 * This handler handles posting orders to user's cart.
 * send POST Request at /api/user/orders
 * */
export const addItemToOrderHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  const { order } = JSON.parse(request.requestBody);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userOrders = schema.users.findBy({ _id: userId }).orders;
  userOrders.unshift({
    ...order,
    createdAt: formatDate(),
    updatedAt: formatDate(),
  });
  return new Response(200, {}, { orders: userOrders });
};
