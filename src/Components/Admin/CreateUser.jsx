import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

export default function CreateUser() {
  const { register,handleSubmit,getValues,formState: { errors },} = useForm(); //React form hooks for handling forms

  // -------------Handling User Registration-------------

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/register", data)
      .then((response) => {
        console.log();
        if (response.data.message === "User Already Exist") {
          toast.info("User Already Exist, Try different email", {
            position: "top-center",
            autoClose: 5000,
          });
        } else {
          toast.info("User Created Successfully", {
            position: "top-center",
            autoClose: 5000,
          });
        }
      })
      .catch((error) => {
        toast.error("Server Issue ,Please try again later");
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="text-center">
        <h3 class="display-4 my-5">Create Users</h3>
      </div>
      <div className="row">
        <div className="col-lg-6 text-center">
          <img src="/images/register.jpg" className="register-img-admin" alt="workout" />
        </div>
        <div className="col-lg-6">
          <form className="register-form-admin" onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row align-items-center ">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example1c">
                  User Name
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
                  User Email
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

            <div className="d-flex flex-row align-items-center">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4c">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="form3Example4c"
                  className="form-control"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i,
                      message:
                        "Minimum eight characters, at least one letter and one number required",
                    },
                  })}
                />
                
              </div>
            </div>
            <div>
              <p className="ms-3 text-danger">{errors.password?.message}</p>
            </div>

            <div className="d-flex flex-row align-items-center">
              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example4cd">
                  Repeat password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="form3Example4cd"
                  className="form-control"
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || "Passwords should match!";
                    },
                  })}
                />
                
              </div>
            </div>
            <div>
              <p className="ms-3 text-danger">
                {errors.confirmPassword?.message}
              </p>
            </div>
            <div class="mb-4 ">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>

              <label
                className="mb-3 "
                for="gender"
                style={{ fontSize: "1.9rem" }}
              >
                Type of User you want create
              </label>
              <div class="gender">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="d-flex justify-content-around">
                  <div className="user-type-radio">
                    <input
                      type="radio"
                      value="trainer"
                      name="userType"
                      id="trainer"
                      {...register("userType", {
                        required: "User Type is required",
                      })}
                    />
                    <label for="trainer">Trainer</label>
                  </div>
                  <div className="user-type-radio text-left">
                    <input
                      type="radio"
                      value="normalUser"
                      name="userType"
                      id="normalUser"
                      {...register("userType", {
                        required: "User Type is required",
                      })}
                    />
                    <label for="normalUser">Trainee</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="ms-3 text-danger">{errors.userType?.message}</p>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <button type="submit" className="btn btn-primary btn-lg">
                Create User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
