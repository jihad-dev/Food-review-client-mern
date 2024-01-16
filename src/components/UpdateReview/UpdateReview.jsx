import React from "react";
import toast from "react-hot-toast";
import {  useLoaderData } from "react-router-dom";

const UpdateReview = () => {
  const updateReview = useLoaderData();
  // console.log(updateReview);
  const handleSaveReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const updateData ={
      name: name,
    }
    // console.log(updateData);
    fetch(`https://food-review-server-mern.vercel.app/reviews/${updateReview._id}`,{
      method:'PUT',
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify(updateData)
    })
    .then(res =>res.json())
    .then(data =>{
      if(data.acknowledged > 0){
        toast.success('Updated successfully')
      }
   
    })
  };
  return (
    <div>
      <h2 className="text-center text-4xl font-bold p-4">update-review👌</h2>
      <div className="overflow-x-auto">
        <table className="table">
        
          <thead>
            <tr>
              <th>serviceId</th>
              <th>serviceName</th>
              <th>customer Name</th>
              <th>Email</th>
              <th>photoURL</th>
            </tr>
          </thead>
          
        </table>
      </div>
      <form className="mb-8 px-7 my-7" onSubmit={handleSaveReview}>
              <div className="grid  sm:grid-cols-1 lg:grid-cols-5 md:grid-cols-4 gap-10">
                <input
                  type="text"
                  readOnly
                  defaultValue={updateReview.serviceId}
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs select-none"
                />
                <input
                  type="text"
                  readOnly
                  defaultValue={updateReview.serviceName}
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <input
                  type="text"
                  name="name"
                  defaultValue={updateReview.name}
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs"
                />
                <input
                  type="text"
                  readOnly
                  defaultValue={updateReview.email}
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs text-black"
                />
                <div className="card-actions">
              
                    <button className="btn btn-primary">save</button>
                 
                </div>
              </div>
            </form>
    </div>
  );
};

export default UpdateReview;
