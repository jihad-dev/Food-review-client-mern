import React, { useState } from "react";
import toast from "react-hot-toast";

const AddService = () => {
  const [image, setImage] = useState(null);
  const imageHostKey = process.env.REACT_APP_imagbb_key;


  const handleAddServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const imageUrl = image;

    const name = form.name.value;
    const recipe = form.description.value;
    const price = form.price.value;
    const serviceReview = form.review.value;
    const formData = new FormData();
    formData.append("image", imageUrl);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const serviceData = {
            image: imgData.data.url,
            name,
            recipe,
            price,
            serviceReview,
          };
          fetch("https://food-review-server-mern.vercel.app/services", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(serviceData),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data);
              if (data.acknowledged > 0) {
                toast.success("service added successfully");
                // alert("service added successfully");
              }
            });
        }
      });
  };
  return (
    <div>
      <div className="hero pt-20 bg-base-300">
        <div className="">
          <div className="card w-[600px]  shadow-2xl bg-base-100">
            <form onSubmit={handleAddServices} className="card-body">
              {/* image input field  choice image  */}


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Enter Image</span>
                </label>
                <input
                  type="file"
                  placeholder="Enter image"
                  className="input input-bordered"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>


              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Service Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>

                <textarea
                  placeholder="Enter your Description..."
                  className="input input-bordered"
                  name="description"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Enter your Service Price"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service review</span>
                </label>
                <input
                  type="text"
                  name="review"
                  placeholder="Enter your service review"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-6">Add Service</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
