import React, { useContext, useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const handleLogOut = () => {
    logOut()
    .then(()=>{})
    .catch(()=>{})
   
  }

  const navLinks = [
    <>
      {
        <li>
          <Link to="/">Home</Link>
        </li>
      }

      {
        <li>
          <Link to="/about">About</Link>
        </li>
      }
      {
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
      }
      {
        <li>
          <Link to="/myReview">MyReview</Link>
        </li>
      }
      {
        <li><Link to='/add-service'>Add Service</Link></li>
      }
      {user ? (
        <Link to='/login' onClick={handleLogOut}>sign out</Link>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>,
  ];

  return (
    <div className="bg-gray-700   w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <Link to="/">
              <img
                className="w-16 h-14 rounded-lg outline-none "
                src="https://png.pngtree.com/png-clipart/20220705/original/pngtree-fast-food-logo-png-image_8330083.png"
                alt=""
              />
            </Link>
          </div>
          {/* navlinks */}
          <div className="hidden md:block">
            <div  className="mr-3 flex items-baseline space-x-4 text-white">
              {navLinks}
            </div>
          </div>
          {/* hamburger menu */}

          <div className="-mr-2 flex md:hidden">
            <button type="button" onClick={handleMenu} className="mr-5   ">
              {open === true ? <FaX /> : <FaBars className="lg:w-8 lg:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile view */}
      {open ? (
        <div className="md:hidden  text-white">
          <div className=" pt-2 pb-3 space-y-1  sm:px-3 ml-2">{navLinks}</div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
