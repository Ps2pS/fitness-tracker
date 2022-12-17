import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function UpdateTrainee({ currRecord, setUsers }) {
  let initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [data, setData] = useState(initialValues); // To store this initial values and current record to be edited

  // To pass or set the record which is to be edited in the input fields
  
  useEffect(() => {
    setData(currRecord);
  }, [currRecord]);

  // Handling Form Changes

  const handleEdit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };

  // Posting Data to to the backend for Updating the record

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8080/updateUser/${data._id}`, data)
      .then((response) => {
        if (response.data === "Updated Successfully") {
          toast.success(response.data, {
            position: "top-center",
            autoClose: 5000,
          });

          // To refresh data after successfully being Updated

          axios
            .get("http://localhost:8080/userData")
            .then((response) => {
              setUsers(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
          setData(initialValues);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form className="mx-auto admin-create-form">
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
              name="userName"
              value={data.name}
              onChange={handleEdit}
            />
          </div>
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
              value={data.mobile}
              onChange={handleEdit}
            />
          </div>
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
              value={data.email}
              onChange={handleEdit}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center mx-4 mt-3 mb-lg-4">
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-primary btn-lg"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateTrainee;
