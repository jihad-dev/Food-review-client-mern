import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewTable from "./ReviewTable";
import toast from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDeleteReview = (id) => {
    const proceed = window.confirm("Are you sure you want to delete");

    if (proceed) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
           toast.success("Delete successfully!");
           
          }
          const remaining = reviews.filter((rev) => rev._id !== id);
          setReviews(remaining);
        });
    }
  };

  return (
    <div>
      <h2 className="text-center font-bold text-3xl p-3">
        My Review {reviews.length}{" "}
      </h2>
      {reviews.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>serviceId</th>
                <th>serviceName</th>
                <th>customer Name</th>
                <th>Email</th>
                <th>photoURL</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <ReviewTable
                  review={review}
                  handleDeleteReview={handleDeleteReview}
                  key={review._id}
                ></ReviewTable>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-5xl font-bold text-center p-14 text-red-500">
          No review
        </h2>
      )}
    </div>
  );
};

export default MyReview;
