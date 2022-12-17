import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Profile({ userData }) {
  let initialValues = {
    name: userData.name,
    height: "",
    age: "",
    weight: "",
    gender: "",
    mobile: userData.mobile,
    email: userData.email,
  };
  const [currentData, setCurrentData] = useState(userData);// For storing logged in user details
  const [data, setData] = useState(initialValues); //For handling Profile inputs


  useEffect(() => {

    // Fetching User Profile information 

    axios
      .get("http://localhost:8080/profilesData", {
        params: {
          email: data.email,
        },
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        if (response.data.length === 0) {
          setData(userData);
        } else {
          setData(response.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Handling input Changes for user profile

  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };

  // Handling Profile creation 

  const handleCreate = () => {
    console.log(data);
    axios
      .post("http://localhost:8080/create-profile", data)
      .then((res) => {
        toast.warning(res.data.message, {
          position: "top-center",
          autoClose: 5000,
        });
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  // Handling Profile Updates
  
  const updateProfile = () => {
    console.log(data);
    axios
      .put(`http://localhost:8080/update-profile/${data._id}`, data)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
        });

        // Fetching Lastest user profile information after update

        axios
          .get("http://localhost:8080/profilesData", {
            params: {
              email: data.email,
            },
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            if (response.data.length === 0) {
              setData(userData);
            } else {
              setData(response.data[0]);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));

      // Updating User Name the main users data base

    axios
      .patch(`http://localhost:8080/updateUserName/${currentData._id}`, {
        name: data.name,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                class="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span class="text-black-50">{userData.email}</span>
              <span> </span>
            </div>
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Profile Settings</h4>
              </div>
              <form action="">
                <div class="row mt-2">
                  <div>
                    <label class="labels">Name</label>
                    <input
                      name="name"
                      type="text"
                      class="form-control text-capitalize"
                      placeholder="first name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <input
                      name="mobile"
                      type="number"
                      class="form-control"
                      placeholder="enter phone number"
                      value={data.mobile}
                      onChange={handleChange}
                    />
                  </div>

                  <div class="col-md-12 my-3">
                    <label class="labels">Gender</label>
                    <div>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        id="male"
                      />
                      <label class="form-check-label me-3" htmlFor="male">
                        Male
                      </label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        id="female"
                      />
                      <label class="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                  <div class="col-md-12 my-3">
                    <label class="form-check-label">Age</label>
                    <input
                      name="age"
                      type="number"
                      class="form-control"
                      placeholder="age"
                      value={data.age}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-12 my-3">
                    <label class="form-check-label">Height (in cm)</label>
                    <input
                      name="height"
                      type="number"
                      class="form-control"
                      placeholder="Height"
                      value={data.height}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="col-md-12 my-3">
                    <label class="labels">Weight (in kg)</label>
                    <input
                      name="weight"
                      type="number"
                      class="form-control"
                      placeholder="Weight"
                      value={data.weight}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div class="mt-5 text-center">
                  <button
                    class="btn btn-primary profile-button mx-3"
                    type="button"
                    onClick={handleCreate}
                  >
                    create Profile
                  </button>
                  <button
                    class="btn btn-primary profile-button"
                    type="button"
                    onClick={updateProfile}
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
