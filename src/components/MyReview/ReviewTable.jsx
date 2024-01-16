import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewTable = ({ review, handleDeleteReview }) => {

  return (
    <tr>
      <th>
        <Link
          onClick={() => handleDeleteReview(review._id)}
          className="text-3xl"
        >
          <FaRegTrashAlt />
        </Link>
      </th>
      <th>{review.serviceId}</th>
      <td>{review.serviceName}</td>
      <td>{review.name}</td>
      <td>{review.email}</td>
      <td>
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={review.photoURL} alt="" />
          </div>
        </div>
      </td>
      <td>
        <div className="card-actions">
          <Link to={`/update-review/${review._id}`}>
            <button className="btn btn-primary">Edit Review</button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default ReviewTable;
