import React, { useContext, useEffect, useState } from "react";
import Service from "./Service";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import Loading from "../../Shared/Loading/Loading";

const Services = () => {
  const [services, setServices] = useState([]);
  const {loading} = useContext(AuthContext);
 

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  if(loading){
    return <Loading></Loading>
  }
  return (
    <div>

      <h2>Services{services.slice(0, 3).length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.slice(0, 3).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/services">
          <button className="btn btn-xs  sm:btn-sm md:btn-md lg:btn-lg">
            see all
          </button>
         
        </Link>
    
      </div>
    </div>
  );
};

export default Services;
