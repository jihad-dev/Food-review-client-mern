import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Details = () => {
  const { name: serviceName, recipe, price, image,_id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleAddReview = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    // const photoURL = user?.photoURL;
    // const photo = form.photo.value;
    const reviewData ={
      serviceId:_id,
      serviceName: serviceName,
      name: name,
      email: email,
      // photoURL: photoURL,
      // photo: photo
    }
// console.log(reviewData)
      fetch('https://food-review-server-mern.vercel.app/reviews',{
        method: 'POST',
        headers:{
          'content-type': 'application/json',
        },
        body:JSON.stringify(reviewData)
      })
      .then(res =>res.json())
      .then(data =>{
        if(data.acknowledged > 0){
          alert('review added successfully')
        }
        
      })
  }
  return (
    <div>
      <h2>Details page</h2>
      <div className="card bg-base-100 shadow-xl mb-10">
        <figure className="px-8 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title font-bold">{serviceName}</h2>
          <h2 className="card-title text-left">{recipe}</h2>
          <h2 className="card-title p-3">${price}</h2>
        </div>
      </div>

      {user?.uid ? (
        <div className="grid lg:grid-cols-2 gap-7">
          <form onSubmit={handleAddReview}>
            <input
              type="text"
              placeholder="Type here"
              defaultValue={serviceName}
              className="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered input-info w-full max-w-xs"
            />
            <input
              type="text"
              defaultValue={user?.email}
              className="input input-bordered input-info w-full max-w-xs"
            />
            {user?.photoURL ? (
              <img src={user?.photoURL}  alt="" />
            ) : (
              <input name="photo" type="file" />
            )}
            <div className="text-center">
              <button className=" btn btn-success">Add review</button>
            </div>
          </form>
        </div>
      ) : (
        <Link className="text-center" to="/login">
          Please login
        </Link>
      )}
    </div>
  );
};

export default Details;
