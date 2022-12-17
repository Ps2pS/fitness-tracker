import { useState, useEffect } from "react";
import axios from "axios";
import UpdateTrainers from "./UpdateTrainers";
import { toast } from "react-toastify";

export default function TrainersList() {
  const [trainers, setTrainers] = useState([]); // Hook to store fetched trainer record
  const [currRecord, setCurrRecord] = useState([]); // Hook to store the information the current updating record

  // Fetching Registerd Trainers Data from backend

  useEffect(() => {
    axios
      .get("http://localhost:8080/trainerData")
      .then((response) => {
        setTrainers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Delete Record

  const deleteRecord = (trainerId) => {
    axios
      .delete(`http://localhost:8080/deleteUser/${trainerId}`)
      .then((response) => {
        if (response.data === "User Deleted Successfully") {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
          });
            // Fetching Registerd Trainers Data from backend
          axios
            .get("http://localhost:8080/trainerData")
            .then((response) => {
              setTrainers(response.data);
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
  return (
    <div>
      <div class="position-relative  background-img-4 p-3 p-md-5 text-center bg-light">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 my-5 font-weight-normal">.</h1>
        </div>
      </div>
      <div className="container">
      <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Trainers Information Dashboard</h3>
        </div>
      
      <UpdateTrainers currRecord={currRecord} setTrainers={setTrainers} />

      <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Manage Trainers</h3>
        </div>
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Trainer Name</th>
            <th scope="col">Trainer Email</th>
            <th scope="col">Trainer Mobile</th>
            <th scope="col">Edit or Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* -------------Mapping trainers record------------- */}
          {trainers.map((trainer, index) => {
            return (
              <tr>
                <th scope="row">{index}</th>
                <td>{trainer.name}</td>
                <td>{trainer.email}</td>
                <td>{trainer.mobile}</td>

                <td>
                  <button
                    className="btn btn-primary me-3"
                    style={{ backgroundColor: "#007BFE" }}
                    onClick={() => setCurrRecord(trainer)}
                  >
                    Edit
                  </button>
                  <button
                    class="btn btn-danger"
                    onClick={() => deleteRecord(trainer._id)}
                  >
                    Delete
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
