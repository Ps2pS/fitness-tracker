import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AdminHome() {
  const [contactData, setContactData] = useState([]); // Hook for storing Contact data

  // Hook for Fetching Contact Data

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-contact-record")
      .then((response) => {
        console.log(response.data);
        setContactData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // For Deleting Records from Database

  const deleteRecord = (userId) => {
    axios
      .delete(`http://localhost:8080/delete-contact-record/${userId}`)
      .then((response) => {
        toast.success(response.data, {
          position: "top-center",
          autoClose: 5000,
        });
        axios
          .get("http://localhost:8080/get-contact-record")
          .then((response) => {
            console.log(response.data);
            setContactData(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
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
          <h3>Contact Dashboard</h3>
        </div>
        <table class="table w-75 mx-auto text-center">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">User Name</th>
              <th scope="col">User Email</th>
              <th scope="col">User Mobile</th>
              <th scope="col">Message</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>

            {/* -------------Mapping Contact data------------- */}

            {contactData.map((user, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.mobile}</td>
                  <td>{user.message}</td>

                  <td>
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

export default AdminHome;
