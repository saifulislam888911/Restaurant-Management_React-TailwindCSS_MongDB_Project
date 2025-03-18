import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// Files : Contexts :
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURl)
        .then(() => {
          console.log("User Profile Updated");

          reset();

          Swal.fire({
            position: "top-end",
            icon: "success",
            // title: "User Profile Updated",
            title: "Sign Up Successful",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    });
  };

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <Helmet>
        <title>Bistro Restaurant | Sign Up</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>

            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  {...register("name", { required: true })}
                  className="input"
                  placeholder="Name"
                />
                {errors.name && (
                  <span className="text-red-400">Name is required</span>
                )}

                <label className="fieldset-label">Photo URL</label>
                <input
                  type="text"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                  className="input"
                  placeholder="Photo URL"
                />
                {errors.photoURL && (
                  <span className="text-red-400">Photo URL is required</span>
                )}

                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input"
                  placeholder="Email"
                />
                {errors.email && (
                  <span className="text-red-400">Email is required</span>
                )}

                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  className="input"
                  placeholder="Password"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400">Password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400">
                    Password must be at least 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-400">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400">
                    Password must contain at least one uppercase letter, one
                    lowercase letter, one number and one special character
                  </span>
                )}

                <input
                  type="submit"
                  className="btn btn-neutral mt-4"
                  value="Signup"
                />
              </fieldset>
            </form>

            <p>
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
