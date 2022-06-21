import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's cart.
 * send GET Request at /api/user/addresses
 * */
export const getAllAddressesHandler = function (schema, request) {
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
  const userAddresses = schema.users.findBy({ _id: userId }).addresses;
  return new Response(200, {}, { addresses: userAddresses });
};

/**
 * This handler handles adding items to user's cart.
 * send POST Request at /api/user/address
 * body contains {address}
 * */

export const addItemToAddressesHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const { address } = JSON.parse(request.requestBody);
    userAddresses.push({
      _id: uuid(),
      ...address,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(201, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles editing items to user's addresses.
 * send POST Request at /api/user/address/:addressId
 * */

export const editAddressItemHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const addressId = request.params.addressId;
    const { address } = JSON.parse(request.requestBody);
    userAddresses = userAddresses.map((item) => {
      if (item._id === addressId) {
        return {
          _id: uuid(),
          ...address,
          createdAt: formatDate(),
          updatedAt: formatDate(),
        };
      }
      return item;
    });

    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(200, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's addresesses.
 * send DELETE Request at /api/user/address/:addressId
 * */

export const removeItemFromAddressesHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const addressId = request.params.addressId;
    userAddresses = userAddresses.filter((item) => item._id !== addressId);
    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(200, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
