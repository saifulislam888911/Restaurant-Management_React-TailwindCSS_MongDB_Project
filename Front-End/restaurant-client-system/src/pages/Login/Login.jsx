import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// Files : Contexts :
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signIn(email, password).then((result) => {
      const user = result.user;
      // console.log("The user is : " + user);

      Swal.fire({
        title: "Login Successful",
        position: "top-end",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });

      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;
    // console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro Restaurant | Login</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card bg-base-100 shadow-2xl max-w-sm md:w-1/2">
            <form onSubmit={handleLogin} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <label className="fieldset-label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  className="input"
                  placeholder="Please enter the captcha"
                />
                <button
                  type="button"
                  // onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <input
                  disabled={disabled}
                  type="submit"
                  className="btn btn-neutral mt-4"
                  value="Login"
                />
              </fieldset>
            </form>

            <p>
              <small>
                New Here? <Link to="/signup">Create an Account</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
