import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../hooks/JwtAuth";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
    setAuthToken(user)
        alert('user registration successfully')
      })
      .catch((err) => {
        console.log(err);
      });

    form.reset();
  };
  return (
    <div className="grid gap-24 lg:grid-cols-2 lg:p-12 m-6">
      <div className=" px-14  border  border-sky-600">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmJRMoIIK6LC1Bm5jHKM7eKiMVMBHJJOkGKoTvKC-oxKJrSZ6HPZxlTt_KEEWbb09WmVo&usqp=CAU"
          className="w-[460px] h-[502px] lg:mt-20"
          alt="register"
        />
      </div>

      <form
        onSubmit={handleRegister}
        className="card-body border  border-red-600"
      >
        <h1 className="text-4xl font-bold text-center mt-16 ">
          Please Register ✌️
        </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div className="divider">OR</div>
        {/* social */}
        <SocialLogin/>
        <p className="text-center text-xl">
          Already have an account?{" "}
          <Link className="text-orange-600" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
