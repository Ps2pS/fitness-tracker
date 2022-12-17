import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import UpdateTrainee from "./UpdateTrainees";

export default function UsersList() {
  const [users, setUsers] = useState([]); // Hook to store all users data
  const [currRecord, setCurrRecord] = useState([]); // To store current data for the user to be edited

  // Fetching Users Data

  useEffect(() => {
    axios
      .get("http://localhost:8080/userData")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Delete User Data

  const deleteRecord = (userId) => {
    axios
      .delete(`http://localhost:8080/deleteUser/${userId}`)
      .then((response) => {
        if (response.data === "User Deleted Successfully") {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
          });

          // To refresh data after successfully being Deleted
          
          axios
            .get("http://localhost:8080/userData")
            .then((response) => {
              setUsers(response.data);
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
      <div class="position-relative  background-img-3 p-3 p-md-5 text-center bg-light">
        <div class="col-md-5  mx-auto my-5">
          <h1 class="display-4 my-5 font-weight-normal">.</h1>
        </div>
      </div>
      <div className="container">
        <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Trainees Information Dashboard</h3>
        </div>

        <UpdateTrainee currRecord={currRecord} setUsers={setUsers} />

        <div className="text-center col-md-5 p-lg-5 mx-auto my-3 mb-5">
          <h3>Manage Trainees</h3>
        </div>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">User Mobile</th>
              <th scope="col">Edit or Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* -------------Mapping Users data------------- */}

            {users.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>
                    <button
                      className="btn btn-primary me-3"
                      style={{ backgroundColor: "#007BFE" }}
                      onClick={() => setCurrRecord(user)}
                    >
                      Edit
                    </button>
                    <button
                      class="btn btn-danger"
                      onClick={() => deleteRecord(user._id)}
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
