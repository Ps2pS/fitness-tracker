import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Home() {

  // React Hook form to handle form inputs
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    // Handling Contact us form and submitting the values to backend

    axios
      .post("http://localhost:8080/contact-record", data)
      .then((response) => {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 5000,
        });
        reset();
      })
      .catch((error) => {
        toast.error("Server Issue ,Please try again later", {
          position: "top-center",
          autoClose: 5000,
        });
        console.log(error);
      });
  };
  return (
    <div>
      <header class="masthead">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">
                Keep Yourself Fit All Day
              </h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 mb-5">
                Track your fitness and complete different tasks provided By your
                personal trainer
              </p>
              <a class="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      <section class="page-section bg-primary" id="about">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="text-white mt-0">We've got what you need!</h2>
              <hr class="divider divider-light" />
              <p class="text-white-75 mb-4">
                Physical fitness is a state of health and well-being and, more
                specifically, the ability to perform aspects of sports,
                occupations and daily activities. Physical fitness is generally
                achieved through proper nutrition, moderate-vigorous physical
                exercise, and sufficient rest along with a formal recovery plan.
              </p>
              <a class="btn btn-light btn-xl" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="services">
        <div class="container px-4 px-lg-5">
          <h2 class="text-center mt-0">At Your Service</h2>
          <hr class="divider" />
          <div class="row gx-4 gx-lg-5">
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-gem fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Personal Trainer Experience</h3>
                <p class="text-muted mb-0">
                  Professional Trainer always Ready to help
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-laptop fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Up to Date</h3>
                <p class="text-muted mb-0">Anywhere Access to your profile</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-globe fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Ready to Publish</h3>
                <p class="text-muted mb-0">Keep track of your workout</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 text-center">
              <div class="mt-5">
                <div class="mb-2">
                  <i class="bi-heart fs-1 text-primary"></i>
                </div>
                <h3 class="h4 mb-2">Made with Love</h3>
                <p class="text-muted mb-0">
                  24/7 Available trainer to help you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="portfolio">
        <div class="container-fluid p-0">
          <div class="row g-0">
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/1.jpg" alt="..." />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/2.jpg" alt="..." />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/3.jfif" alt="..." />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/4.jpg" alt="..." />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/5.jpg" alt="..." />
            </div>
            <div class="col-lg-4 col-sm-6">
              <img class="img-fluid" src="images/6.jpg" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <section class="page-section bg-dark text-white">
        <div class="container px-4 px-lg-5 text-center">
          <h2 class="mb-4">Let's Start keep yourself fit from today</h2>
          <Link class="btn btn-light btn-xl" to="/Register">
            Register Now
          </Link>
        </div>
      </section>
      <section class="page-section" id="contact">
        <div class="container px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-8 col-xl-6 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider" />
              <p class="text-muted mb-5">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div class="col-lg-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex flex-row align-items-center ">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="form3Example1c"
                      className="form-control"
                      name="name"
                      {...register("name", {
                        required: "Name is required",
                        minLength: {
                          value: 5,
                          message: "Length must be greater than 5",
                        },
                        maxLength: {
                          value: 30,
                          message: "Length must be less than 30 ",
                        },
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="ms-3 text-danger">{errors.name?.message}</p>
                </div>

                <div className="d-flex flex-row align-items-center">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="form3Example3c"
                      name="email"
                      className="form-control"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="ms-3 text-danger">{errors.email?.message}</p>
                </div>

                <div className="d-flex flex-row align-items-center ">
                  <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="mobile">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      id="mobile"
                      className="form-control"
                      name="mobile"
                      {...register("mobile", {
                        required: "Mobile Number is required",
                        minLength: {
                          value: 10,
                          message: "Atleast 10 digits are required",
                        },
                        maxLength: {
                          value: 13,
                          message: "Cannot exceed 13 digits ",
                        },
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="ms-3 text-danger">{errors.mobile?.message}</p>
                </div>

                <div className="d-flex flex-row align-items-center">
                  <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                  <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                      Message
                    </label>
                    <textarea
                      type="text"
                      id="form3Example3c"
                      name="message"
                      className="form-control"
                      {...register("message", {
                        required: "Message is required",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="ms-3 text-danger">{errors.message?.message}</p>
                </div>

                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">
                      https://startbootstrap.com/solution/contact-forms
                    </a>
                  </div>
                </div>


                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-xl "
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-lg-4 text-center mb-5 mb-lg-0">
              <i class="bi-phone fs-2 mb-3 text-muted"></i>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
