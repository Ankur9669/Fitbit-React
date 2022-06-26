import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import VerticalCard from "../../Components/VerticalCard/VerticalCard";
import { useUser } from "../../Context/user-context";
import { useWishList } from "../../Context/wishlist-context";
import { Navbar, Footer, AiFillHeart, PrimaryButton } from "./index";
import { Link } from "react-router-dom";
import "./wishlist.css";
import { useDocumentTitle } from "../../Util/change-document-title";

function WishList() {
  const { wishlist } = useWishList();
  const { user } = useUser();

  useDocumentTitle("FiTbiT-WishList");

  return (
    <div>
      <Navbar />
      <div className="spacer-3"></div>
      {wishlist.length > 0 ? (
        <section className="wishlist-products">
          <h3 className="h2 centered-text">My WishList</h3>
          <div className="spacer-3"></div>
          <div className="wishlist-products-container">
            {wishlist?.map((wishListProduct) => {
              return (
                <VerticalCard
                  key={wishListProduct?._id}
                  product={wishListProduct}
                />
              );
            })}
          </div>
        </section>
      ) : (
        <div className="wishlist-cart-container">
          <img
            src="/images/empty-wishlist.svg"
            className="wishlist-cart-img img-responsive"
            alt="empty-wishlist"
          ></img>
          <p className="weight-semi-bold font-large centered-text">
            Your WishList is Empty
          </p>
          <div className="spacer-1"></div>
          <p className="weight-normal font-medium centered-text">
            Add Some Items Now
          </p>
          <div className="spacer-1"></div>
          <Link to="/products">
            <PrimaryButton buttonText="Add Items" />
          </Link>

          <div className="spacer-3"></div>
        </div>
      )}

      <div className="spacer-3"></div>
      <Footer />
    </div>
  );
}

export default WishList;
