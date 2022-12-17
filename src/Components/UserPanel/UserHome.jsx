import axios from "axios";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import DonutChart from "./DonutChart";
import LineChart from "./LineChart";

export default function UserHome({ userData }) {
  const [plans, setPlans] = useState([]);
  const [scheduleId, setScheduleId] = useState(null);
  const [schedule, setSchedule] = useState("");
  const [status, setStatus] = useState("");
  const [calories, setCalories] = useState(null);
  const [userExercises, setUserExercises] = useState([]);

  // Fetching workout record based on workout plan allocated to user 

  useEffect(() => {
    axios
      .get("http://localhost:8080/workout-record", {
        params: {
          email: userData.email,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data) {
          setPlans(response.data[0]._id);
          setScheduleId(response.data[0]._id);
          setStatus(response.data[0].status);
          setSchedule(response.data[0].workoutName);

          // Fetching workout plan information 

          axios
            .get("http://localhost:8080/get-user-workout-plan", {
              params: {
                workoutName: schedule,
              },
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              setCalories(response.data[0].calories);
              setUserExercises(response.data[0].exercises);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setSchedule(response.data.message);
          alert("No record");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [status]);

  // Update Status for workout completion

  const updateStatus = (event) => {
    event.preventDefault();
    axios
      .patch(`http://localhost:8080/update-status/${plans}`, {
        status: "completed",
      })
      .then((response) => {
        toast.success(response.data, {
          position: "top-center",
          autoClose: 5000,
        });
        if (response.data === "Updated Successfully") {

          // Refetching The status information after update

          axios
            .get("http://localhost:8080/workout-record", {
              params: {
                email: userData.email,
              },
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              if (response.data) {
                setPlans(response.data[0]._id);
                setScheduleId(response.data[0]._id);
                setStatus(response.data[0].status);
                setSchedule(response.data[0].workoutName);
                axios
                  .get("http://localhost:8080/get-user-workout-plan", {
                    params: {
                      workoutName: schedule,
                    },
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  })
                  .then((response) => {
                    setCalories(response.data[0].calories);
                    setUserExercises(response.data[0].exercises);

                  })
                  .catch((err) => {
                    console.log(err);
                  });
              } else {
                setSchedule(response.data.message);
                toast.error("No record", {
                  position: "top-center",
                  autoClose: 5000,
                });
              }
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };

  return (
    <div className="">
      <header class="home-image">
        <div class="container px-4 px-lg-5 h-100">
          <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div class="col-lg-8 align-self-end">
              <h1 class="text-white font-weight-bold">
                Once you learn to quit, it becomes a habit.
              </h1>
              <hr class="divider" />
            </div>
            <div class="col-lg-8 align-self-baseline">
              <p class="text-white-75 mb-5">
                If you want something you've never had, you must be willing to
                do something you've never done
              </p>
              <a class="btn btn-primary btn-xl" href="#weekTable">
                Check Weekly Schedule
              </a>
            </div>
          </div>
        </div>
      </header>
      <section class="register-section classes-page spad">
        <div class="container">
          <h1 className="display-3 mb-5">
            Welcome Back ,
            <span className="text-capitalize text-danger">{userData.name}</span>
          </h1>

          {/* Mapping workout plan details */}
          <div class="classes-page-text">
            <div class="row">
              <div class="col-lg-8 col-md-6 col-sm-12 col-12">
                <div class="register-text">
                  <div class="section-title">
                    <h2>Weekly Schedule</h2>
                    <p>
                      This workout plan for muscle gain can add width to your
                      upper body and strip fat from your middle, helping you
                      build a big, strong and lean physique
                    </p>
                  </div>

                  <h1>
                    Current Workout :{" "}
                    <span className="text-success">{schedule}</span>{" "}
                  </h1>
                  <h3 className="text-capitalize my-5">
                    Current Status :{" "}
                    <span className="text-primary">{status}</span>
                  </h3>
                  <form action="#" class="register-form">
                    <table class="table schedule-table" id="weekTable">
                      <thead>
                        <tr>
                          <th scope="col">Days</th>
                          {userExercises.map((exercise) => {
                            return (
                              <th className="text-capitalize">
                                {exercise.day}
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                      <tbody>
                        
                        <tr>
                          <th scope="col">Exercise Name</th>
                          {userExercises.map((exercise) => {
                            return <td>{exercise.exerciseName}</td>;
                          })}
                        </tr>
                        <tr>
                          <th scope="col">Duration</th>
                          {userExercises.map((exercise) => {
                            return <td>{exercise.duration} min</td>;
                          })}
                        </tr>
                        <tr>
                          <th scope="col">Description</th>
                          {userExercises.map((exercise) => {
                            return <td>{exercise.description}</td>;
                          })}
                        </tr>
                      </tbody>
                    </table>
                    <div id="weekTable">
                      <h3 className="my-4">
                        Average Calories that will be burnt :{" "}
                        <span className="text-primary">{calories}</span>
                      </h3>
                    </div>

                    <button
                      type="submit"
                      class="register-btn"
                      onClick={updateStatus}
                    >
                      Mark Complete
                    </button>
                  </form>
                </div>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                <div class="text-center my-5">
                  <img
                   class="schedule-img"
                    src="https://technext.github.io/gutim/img/register-pic.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center user-home-image-2">
        <h1 class="text-white">Track Your Weekly Calories Burnt</h1>
      </div>
      <section className="py-5">
        <div class="container">
          <DonutChart />
          <LineChart/>

        </div>
      </section>
    </div>
  );
}
