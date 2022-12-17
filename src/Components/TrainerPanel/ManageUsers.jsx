import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ManageUsers() {
  const [usersData, setUsersData] = useState([]); //Stores Users Data
  const [plans, setPlans] = useState([]); //Stores Workout Plans Created By Admin or Trainer
  const [workoutRecords, setWorkoutRecord] = useState([]); //Stores Workout Records

  // Getting all workout records

  useEffect(() => {
    axios
      .get("http://localhost:8080/all-workout-record")
      .then((response) => {
        setWorkoutRecord(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Getting Users data

  useEffect(() => {
    axios
      .get("http://localhost:8080/userData")
      .then((response) => {
        setUsersData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Fetching Plans

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-plan")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Handling Updating and creating Workout Allocations

  let initialValues = {
    userEmail: "",
    workoutName: "",
  };
  const [data, setData] = useState(initialValues); // Stores Information Entered by Trainer

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };
  function handleSubmit(event) {
    event.preventDefault();

    // Validating If complete information is Filled or not

    if (!data.userEmail && !data.workoutName) {
      toast.error("Please Complete the missing information", {
        position: "top-center",
        autoClose: 5000,
      });
    } else if (
      data.userEmail === "Choose..." ||
      data.workoutName === "Choose..."
    ) {
      toast.warning("Please choose the required values", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {

      // Posting Allocation record to backend
      
      axios
        .post("http://localhost:8080/allocate-workout", data)
        .then((response) => {
          if (response.data === "Updated Successfully") {
            toast.success(response.data, {
              position: "top-center",
              autoClose: 5000,
            });

            // Refetching users data after allocating data to the user

            axios
              .get("http://localhost:8080/userData")
              .then((response) => {
                setUsersData(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          } else if (
            response.data ==="There might be an error while updating record"
          ) {
            toast.error(response.data, {
              position: "top-center",
              autoClose: 5000,
            });
          } else {
            toast.success("Workout Allocation successfull", {
              position: "top-center",
              autoClose: 5000,
            });
            
            // Again fetching Data if allocation successfull

            axios
              .get("http://localhost:8080/all-workout-record")
              .then((response) => {
                setWorkoutRecord(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  // Delete user Record

  const deleteRecord = (userId) => {
    axios
      .delete(`http://localhost:8080/delete-workout-record/${userId}`)
      .then((response) => {
        if (response.data === "Record Deleted Successfully") {
          toast.success("Record Deleted Successfully", {
            position: "top-center",
            autoClose: 5000,
          });

          // Refetching users data after deleting

          axios
            .get("http://localhost:8080/all-workout-record")
            .then((response) => {
              setWorkoutRecord(response.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="position-relative  background-img-2 p-3 p-md-5  text-center bg-light">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 my-5 font-weight-normal">.</h1>
        </div>
      </div>

      {/* ---------------Allocating Workout Plans to Users--------------- */}

      <section className="container">
        <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Allocate Workout to user</h3>
        </div>
        <form style={{ width: "50%" }} className="mx-auto">
          <div class="form-group mb-4">
            <label className="mb-3" for="UserEmail">
              Select User Email
            </label>
            <select
              id="UserEmail"
              class="form-control"
              name="userEmail"
              value={data.userEmail}
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              {usersData.map((user) => {
                return (
                  <option class="dropdown-item" value={user.email}>
                    {user.email}
                  </option>
                );
              })}
            </select>
          </div>

          <div class="form-group mb-4">
            <label className="mb-3" for="workoutName">
              Select Workout for User
            </label>
            <select
              id="workoutName"
              class="form-control"
              name="workoutName"
              value={data.workoutName}
              onChange={handleChange}
            >
              <option selected>Choose...</option>
              {plans.map((plan) => {
                return (
                  <option class="dropdown-item">{plan.workoutName}</option>
                );
              })}
            </select>
          </div>
          <div className="text-center">
            <button
              className="btn btn-primary me-3 "
              style={{ backgroundColor: "#007BFE" }}
              onClick={handleSubmit}
            >
              Allocate Workout
            </button>
          </div>
        </form>
      </section>

      {/* ---------------Displaying User Details With Workout Allocated--------------- */}

      <div className="container">
        <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Users Workouts</h3>
        </div>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Email</th>
              <th scope="col">Plan Allocated </th>
              <th scope="col">Status</th>
              <th scope="col">Remove Allocation</th>
            </tr>
          </thead>
          <tbody>
            {workoutRecords.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{user.userEmail}</td>
                  <td>{user.workoutName}</td>
                  <td>{user.status}</td>

                  <td>
                    <button
                      className="btn btn-primary me-3"
                      style={{ backgroundColor: "#007BFE" }}
                      onClick={() => deleteRecord(user._id)}
                    >
                      Remove Workout
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
