import React from "react";
import { useLoaderData } from "react-router-dom";
import Service from "../Services/Service";

const AllService = () => {
  const allServices = useLoaderData();

  return (
    <div>
      <h1>AllService {allServices.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allServices.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllService;
