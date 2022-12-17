import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

function Trainer({ setCurrentUser }) {
  const navigate = useNavigate(); //To navigate between pages
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // To handle Login 
  
  const onSubmit = (data) => {

    // Posting data to handle login,

    axios
      .post("http://localhost:8080/trainerLogin", data)
      .then((response) => {
        if (response.data.message === "login successful") {
          toast.success("Login Successful", {
            position: "top-center",
            autoClose: 5000,
          });
          navigate("/");
          setCurrentUser("Trainer");
        } else {
          toast.warning(response.data.message,{position: "top-center",
          autoClose: 5000,});
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <section className="py-5" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Trainer Login
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example1c"
                              className="form-control"
                              name="email"
                              {...register("email", {
                                required: "Email is required",
                              })}
                            />
                            
                          </div>
                        </div>
                        <div>
                          <p className="ms-3 text-danger">
                            {errors.email?.message}
                          </p>
                        </div>

                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                          <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              {...register("password", {
                                required: "Password is required",
                              })}
                            />
                           
                          </div>
                        </div>
                        <div>
                          <p className="ms-3 text-danger">
                            {errors.password?.message}
                          </p>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          Not Registered to FitTracker ?
                          <Link className="mx-1" to="/Register">
                            Register Now
                          </Link>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://img.freepik.com/free-vector/coach-concept-illustration_114360-5849.jpg?t=st=1656497592~exp=1656498192~hmac=0c51d1d7fd3a7dd4eb54bfd1a001be1657572dca0813a72fe611c1b08c2f3828&w=1380"
                        className="img-fluid"
                        alt="workout"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
