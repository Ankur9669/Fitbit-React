import React from "react";
import {
  PrimaryButton,
  useCart,
  Link,
  useLocation,
  useToast,
  useUser,
  useCheckout,
  addToOrders,
  useNavigate,
} from "./index";

function SummaryCard() {
  const { cart, totalPrice, dispatch: dispatchCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const { user } = useUser();
  const { checkoutDetails, dispatchCheckout } = useCheckout();
  const { pathname } = location;
  const { selectedAddress } = checkoutDetails;
  const discountPrice = 180;
  const deliveryCharges = 40;
  const priceToPay = totalPrice - discountPrice + deliveryCharges;

  const userEmail = user.user.email;
  const userName = `${user.user.firstName} ${user.user.lastName}`;

  const initializeRazorpay = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        reject(false);
      };

      document.body.appendChild(script);
    });
  };

  const placeOrder = async (orderId) => {
    const order = {
      orderId: orderId,
      orders: cart,
      totalPrice: totalPrice,
      address: selectedAddress,
    };
    const { data, success, message } = await addToOrders(order);

    if (success) {
      dispatchCart({ type: "SET_CART", payload: { value: [] } });
      navigate("/orders");
    } else {
      showToast(message, "ERROR");
    }
  };
  const handlePayNowClick = async () => {
    if (checkoutDetails?.selectedAddress?._id == undefined) {
      showToast("Please select address first", "ERROR");
      return;
    }
    const razorpayInstance = await initializeRazorpay();

    if (!razorpayInstance) {
      showToast("ERROR in loading razorpay", "ERROR");
      return;
    }

    const options = {
      key: "rzp_test_QNX5HyxyoVzgDK",
      image: "/images/blob.svg",
      name: "FITBIT",
      description: "Ecomm for fitness products",
      currency: "INR",
      amount: totalPrice * 100,
      handler: async function (response) {
        const { razorpay_payment_id } = await response;
        placeOrder(razorpay_payment_id);
      },
      prefill: {
        name: userName,
        email: userEmail,
        contact: 9999999999,
        method: "phonepe",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <div className="card card-vertical price-details-card">
      <div className="wrapper">
        <div className="text-container">
          <h5 className="font-medium-large weight-semi-bold primary-text-color price-details-card-heading margin-vertical-sm">
            Price Details
          </h5>
          <div className="price-details-section">
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Price ({`${cart.length} items`})</span>
              <span>&#8377;{totalPrice}</span>
            </div>
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Discount</span>
              <span>-&#8377;{discountPrice}</span>
            </div>
            <div className="font-medium weight-normal primary-text-color price-details-item margin-vertical-sm">
              <span>Delivery Charges</span>
              <span>&#8377;{deliveryCharges}</span>
            </div>
          </div>
          <div className="price-details-section">
            <div className="font-medium weight-semi-bold primary-text-color price-details-item margin-vertical-sm">
              <span>TOTAL AMOUNT</span>
              <span>&#8377;{priceToPay}</span>
            </div>
          </div>
          <div className="price-details-section">
            <p className="font-medium weight-semi-bold primary-text-color price-details-item margin-vertical-sm">
              You will save ₹180 on this order
            </p>
          </div>
        </div>

        {pathname === "/checkout" ? (
          <div className="btn-container">
            <PrimaryButton buttonText={"Pay Now"} onClick={handlePayNowClick} />
          </div>
        ) : (
          <Link to="/checkout" className="btn-container">
            <PrimaryButton buttonText={"Checkout"} />
          </Link>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
