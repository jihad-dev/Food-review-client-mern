import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { setAuthToken } from "../../hooks/JwtAuth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        setAuthToken(user)
        alert('User login successfully')
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-4xl text-center mt-24 font-bold">Login Now! ✌️</h1>
      <div className="flex justify-center mt-6 ">
        <div>
          <div className="card w-[450px]   shadow-2xl bg-base-100">
            <form  onSubmit={handleLogin} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="username"
                  placeholder="email"
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
                  autoComplete="current-password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn   btn-primary font-bold">Login</button>
              </div>
              <SocialLogin></SocialLogin>
              <p className="text-center text-xl">
                Don’t have a account?{" "}
                <Link className="text-orange-600" to="/register">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
