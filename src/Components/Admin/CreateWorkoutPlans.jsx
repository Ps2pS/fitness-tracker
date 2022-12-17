import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";


export default function CreatePlans() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Creating or handling workout Plan

  const onSubmit = (data) => {
    // Post request for Creating  Workout Plan
    axios
      .post("http://localhost:8080/create-plan", data)
      .then((response) => {
        console.log(response);
        if (response.data.message === "Workout Already Exist") {
          toast.warning("Workout Already Exist, Try with different workout name",{position: "top-center",
          autoClose: 5000,});
        } else {
          toast.success("Workout Created Successfully",{position: "top-center",
          autoClose: 5000,});
        }
      })
      .catch((error) => {
        toast.error("Server Issue ,Please try again later",{position: "top-center",
        autoClose: 5000,});
        console.log(error);
      });
  };
  return (
    <div>
      <div class="position-relative  background-img p-3 p-md-5 text-center bg-light">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 my-5 font-weight-normal">.</h1>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <h3 class="display-4 my-5">Create workout Plan</h3>
        </div>

        {/*   // -------------Create Workout -------------*/}

        <form className="mx-auto"  onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto rounded border border-warning p-4 mb-4" style={{width:"50%"}}>
            <div className="form-outline mb-3 flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example1c">
                Workout Name
              </label>
              <input
                type="text"
                id="form3Example1c"
                className="form-control"
                name="workoutName"
                {...register("workoutName", {
                  required: "Name of Workout is required",

                  maxLength: {
                    value: 40,
                    message: "Length must be less than 40 ",
                  },
                })}
              />
              <div>
                <p className="mt-1 text-danger">
                  {errors.workoutName?.message}
                </p>
              </div>
            </div>
            <div className="form-outline flex-fill mb-0">
              <label htmlFor="calories">Average Calories burnt </label>
              <input
                type="number"
                id="calories"
                className="form-control"
                name="calories"
                {...register("calories", {
                  required: "Calories is required",
                  pattern: {
                    value: /^[0-9]*$/i,
                    message: "Only numbers are allowed",
                  },
                  max: {
                    value: 2000,
                    message: "Cannot exceed 2000",
                  },
                })}
              />
              <div>
                <p className="mt-1 text-danger">{errors.calories?.message}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"></div>
          </div>
          <div className="text-center">
            <h3 class="display-4 my-5">Days Information</h3>
          </div>

          <div className="row row-auto ">

            {/*   // -------------Mapping Monday Exercies-------------*/}

            <div className="col-lg-6 mb-4 ">
              <div className="row row-auto rounded border border-primary">
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://img.freepik.com/free-vector/pilates-concept-illustration_114360-1111.jpg?w=2000"
                    alt=""
                  />
                  <h5 className="workout-day-text">Monday</h5>
                </div>
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="mondayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="mondayExerciseName"
                          className="form-control"
                          name="mondayExerciseName"
                          {...register("mondayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.mondayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="mondayDescription">Description</label>
                        <input
                          type="text"
                          id="mondayDescription"
                          className="form-control"
                          name="mondayDescription"
                          {...register("mondayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.mondayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="mondayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="mondayDuraion"
                          {...register("mondayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.mondayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Tuesday Exercies-------------*/}

            <div className="col-lg-6">
              <div className="row row-auto">
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="mondayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="tuesdayExerciseName"
                          className="form-control"
                          name="tuesdayExerciseName"
                          {...register("tuesdayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.tuesdayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="tuesdayDescription">Description</label>
                        <input
                          type="text"
                          id="tuesdayDescription"
                          className="form-control"
                          name="tuesdayDescription"
                          {...register("tuesdayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.tuesdayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="tuesdayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="tuesdayDuraion"
                          {...register("tuesdayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.tuesdayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://media.istockphoto.com/vectors/happy-woman-exercising-in-the-park-vector-illustration-in-flat-style-vector-id1139929498?k=20&m=1139929498&s=612x612&w=0&h=mRbKYj7-IJcW2lMh70BpYkc8sLgDC32lK9mZWNZ3nYk="
                    alt=""
                  />
                  <h5 className="workout-day-text">Tuesday</h5>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Wednesday Exercies-------------*/}

            <div className="col-lg-6 mb-4">
              <div className="row row-auto ">
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>

                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="wednesdayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="wednesdayExerciseName"
                          className="form-control"
                          name="wednesdayExerciseName"
                          {...register("wednesdayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.wednesdayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="wednesdayDescription">
                          Description
                        </label>
                        <input
                          type="text"
                          id="wednesdayDescription"
                          className="form-control"
                          name="wednesdayDescription"
                          {...register("wednesdayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.wednesdayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="wednesdayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="wednesdayDuraion"
                          {...register("wednesdayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.wednesdayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="http://unblast.com/wp-content/uploads/2020/03/Girl-Fitness-Vector-Illustration.jpg"
                    alt=""
                  />
                  <h5 className="workout-day-text">Wednesday</h5>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Thursday Exercies-------------*/}

            <div className="col-lg-6">
              <div className="row row-auto rounded border border-primary">
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://cdni.iconscout.com/illustration/free/thumb/girl-doing-yoga-2557094-2140098.png"
                    alt=""
                  />
                  <h5 className="workout-day-text">Thursday</h5>
                </div>
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="thursdayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="thursdayExerciseName"
                          className="form-control"
                          name="thursdayExerciseName"
                          {...register("thursdayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.thursdayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="thursdayDescription">Description</label>
                        <input
                          type="text"
                          id="thursdayDescription"
                          className="form-control"
                          name="thursdayDescription"
                          {...register("thursdayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.thursdayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="thursdayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="thursdayDuraion"
                          {...register("thursdayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.thursdayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Friday Exercies-------------*/}

            <div className="col-lg-6 mb-4">
              <div className="row row-auto rounded border border-primary">
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://cdn2.vectorstock.com/i/1000x1000/45/96/man-male-push-up-gym-workout-exercise-vector-8294596.jpg"
                    alt=""
                  />
                  <h5 className="workout-day-text">Friday</h5>
                </div>
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="fridayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="fridayExerciseName"
                          className="form-control"
                          name="fridayExerciseName"
                          {...register("fridayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.fridayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="fridayDescription">Description</label>
                        <input
                          type="text"
                          id="fridayDescription"
                          className="form-control"
                          name="fridayDescription"
                          {...register("fridayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.fridayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="fridayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="fridayDuraion"
                          {...register("fridayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.fridayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Saturday Exercies-------------*/}

            <div className="col-lg-6">
              <div className="row row-auto ">
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="saturdayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="saturdayExerciseName"
                          className="form-control"
                          name="saturdayExerciseName"
                          {...register("saturdayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.saturdayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="saturdayDescription">Description</label>
                        <input
                          type="text"
                          id="saturdayDescription"
                          className="form-control"
                          name="saturdayDescription"
                          {...register("saturdayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.saturdayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="saturdayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="saturdayDuraion"
                          {...register("saturdayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.saturdayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFqVtxRaSYDPjXxfxiTAdK5rkqnRziBscoqg&usqp=CAU"
                    alt=""
                  />
                  <h5 className="workout-day-text">Saturday</h5>
                </div>
              </div>
            </div>

            {/*   // -------------Mapping Sunday Exercies-------------*/}

            <div className="col-lg-6">
              <div className="row row-auto ">
                <div className="col-lg-4 text-center">
                  <img
                    className="card-img"
                    src="https://i.pinimg.com/736x/a6/c7/36/a6c736de33a5d7a4d3116d5bb57dfcff.jpg"
                    alt=""
                  />
                  <h5 className="workout-day-text">Sunday</h5>
                </div>
                <div className="col-lg-8">
                  <div className="px-1 py-2">
                    <div className="d-flex flex-row align-items-center">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="sundayExerciseName">
                          Exercise Name
                        </label>
                        <input
                          type="text"
                          id="sundayExerciseName"
                          className="form-control"
                          name="sundayExerciseName"
                          {...register("sundayExerciseName", {
                            required: "Name of exercise is required",

                            maxLength: {
                              value: 40,
                              message: "Length must be less than 40 ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.sundayExerciseName?.message}
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="sundayDescription">Description</label>
                        <input
                          type="text"
                          id="sundayDescription"
                          className="form-control"
                          name="sundayDescription"
                          {...register("sundayDescription", {
                            required: "Description is required",

                            maxLength: {
                              value: 100,
                              message: "Cannot exceed 100 Characters ",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.sundayDescription?.message}
                      </p>
                    </div>

                    <div className="d-flex flex-row align-items-center ">
                      <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      <div className="form-outline flex-fill mb-0">
                        <label htmlFor="sundayDuraion">
                          Duration in Minutes
                        </label>
                        <input
                          type="number"
                          id="description"
                          className="form-control"
                          name="sundayDuraion"
                          {...register("sundayDuraion", {
                            required: "Duration is required",
                            pattern: {
                              value: /^[0-9]*$/i,
                              message: "Only numbers are allowed",
                            },
                            max: {
                              value: 60,
                              message: "Cannot exceed 60",
                            },
                          })}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="ms-3 text-danger">
                        {errors.sundayDuraion?.message}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Create Workout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
