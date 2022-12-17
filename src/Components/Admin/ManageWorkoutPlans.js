import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function ManageWorkoutPlans() {
  let initialValues = {
    workoutName: "",
    exercises: [
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
      { exerciseName: "", description: "", duration: "" },
    ],
  };

  const [plans, setPlans] = useState([]); // Hook for storing workout plans 
  const [currRecord, setCurrRecord] = useState(initialValues); // Hook for storing initial values 

  // Handling form Inputs

  const handleEdit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setCurrRecord({ ...currRecord, [name]: value });
  };

  // Fetching Workout plans

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-plan")
      .then((response) => {
        setPlans(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Deleting Record

  const deleteRecord = (planId) => {
    axios
      .delete(`http://localhost:8080/delete-plan/${planId}`)
      .then((response) => {
        if (response.data === "User Deleted Successfully") {
          toast.success(response.data,{position: "top-center",
          autoClose: 5000,})
          
          // If Delete successful then refetching and setting plans

          axios
            .get("http://localhost:8080/get-plan")
            .then((response) => {
              setPlans(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Updating record

  const handleUpdate=()=>{
    console.log(currRecord)
  }


  return (
    <div>
      <div class="position-relative  background-img-5 p-3 p-md-5 text-center bg-light">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 my-5 font-weight-normal">.</h1>
        </div>
      </div>
      <div className="container">
      <div className="text-center">
        <h3 class="display-4 my-5">Manage Workout Plans</h3>
      </div>
      <table class="table text-center mx-auto" style={{width:"50%"}}>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Workout Name</th>
            <th scope="col">Edit or Delete</th>
          </tr>
        </thead>
        <tbody>

          {/* Mapping Data for the workout plans allocated  */}

          {plans.map((plan, index) => {
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>{plan.workoutName}</td>
                <td>
                  <button
                    className="btn btn-primary me-3"
                    style={{ backgroundColor: "#007BFE" }}
                    onClick={() => setCurrRecord(plan)}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteRecord(plan._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <section>
        <div className="text-center">
          <h3 class="display-4 my-5">Update Plans</h3>
        </div>
        <form>
          <div className="admin-create-form mx-auto">
            <div className="form-outline mb-3 flex-fill mb-0">
              <label className="form-label" htmlFor="form3Example1c">
                Workout Name
              </label>
              <input
                type="text"
                id="form3Example1c"
                className="form-control"
                name="workoutName"
                value={currRecord.workoutName}
                onChange={handleEdit}
              />
            </div>
            <div className="form-outline mb-3 flex-fill mb-0">
              <label className="form-label" htmlFor="calories">
                Calories Burnt
              </label>
              <input
                type="text"
                id="calories"
                className="form-control"
                name="calories"
                value={currRecord.calories}
                onChange={handleEdit}
              />
            </div>
          </div>
          <table class="table text-center">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Monday</th>
                <th scope="col">Tuesday</th>
                <th scope="col">Wedsnesday</th>
                <th scope="col">Thursday</th>
                <th scope="col">Friday</th>
                <th scope="col">Saturday</th>
                <th scope="col">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Workout Name</th>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="exerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[0].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="tuesdayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[1].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="wednesdayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[2].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="thursdayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[3].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="fridayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[4].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="saturdayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[5].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="sundayExerciseName"
                    placeholder="Workout Name"
                    value={currRecord.exercises[6].exerciseName}
                    onChange={handleEdit}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="mondayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[0].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="tuesdayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[1].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="wednesdayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[2].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="thursdayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[3].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="fridayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[4].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="saturdayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[5].description}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="sundayDescription"
                    placeholder="Description"
                    value={currRecord.exercises[6].description}
                    onChange={handleEdit}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">Duration</th>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="mondayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[0].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="tuesdayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[1].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="wednesdayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[2].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="thursdayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[3].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="fridayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[4].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="saturdayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[5].duration}
                    onChange={handleEdit}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    name="sundayDuration"
                    placeholder="Duration"
                    value={currRecord.exercises[6].duration}
                    onChange={handleEdit}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-lg" onClick={handleUpdate}>
              Update Plan
            </button>
          </div>
        </form>
      </section>
      </div>
     
    </div>
  );
}
