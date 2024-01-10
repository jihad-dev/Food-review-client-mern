import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const Service = ({ service }) => {
  const { image, name, price, recipe } = service;
 
  return (
    <div className="card bg-base-100 shadow-xl mb-10">
      <Link className="px-8 pt-10">
        <PhotoProvider>
          <PhotoView src={image}>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </PhotoProvider>
      </Link>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold">{name}</h2>
        <h2 className="card-title text-left">{recipe}</h2>
        <h2 className="card-title p-3">${price}</h2>

        <div className="card-actions">
          <Link to={`/details/${service._id}`}>
            <button className="btn btn-primary">view Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
