import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { SWIGGY_IMAGE_URL, Swiggy_URL } from "../utils/constant";
import ShimmerUi from "./ShimmerUi";
import { Link, useParams } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
    console.log("resssssssssssssssssssssssssssssss",restaurant)
  if (restaurant.length === 0) {
    return <ShimmerUi />
  }

  return (
    <>
      <div className="res_container">
        {restaurant.map((res) => (
          <Link
            className="reslink"
            key={res?.info?.id}
            to={`/restaurant/${res?.info?.id}`}
          >
            <div className="restaurant-card">
              <img
                src={SWIGGY_IMAGE_URL + res?.info?.cloudinaryImageId}
                alt="res-img"
              />

              <h4 className="res_name">{res?.info?.name}</h4>

              {res?.info?.cuisines.map((item, i) => (
                <span key={i} className="cuisines">
                  {item}
                </span>
              ))}

              <div className="content-res">
                <p>
                  {res?.info?.avgRating}

                  <span className="star">
                    <AiFillStar />
                  </span>
                </p>
                <p>{res?.info?.costForTwo}</p>
                <p className="area">{res?.info?.areaName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default RestaurantCard;
