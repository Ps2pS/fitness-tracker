import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Admin({ setCurrentUser }) {
  const navigate = useNavigate();
  let initialValues = {
    userName: "",
    password: "",
  };
  const [admin, setAdmin] = useState(initialValues);

  // handling Form values

  const handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;

    setAdmin({ ...admin, [name]: value });
  };

  // -------------Authorizing Admin Login-------------

  const handleSubmit = () => {
    if (admin.userName === "fitAdmin" && admin.password === "admin@cts") {
      setCurrentUser("admin");
      toast.success("Admin Verified Successfully", {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/");
    } else if (!admin.userName || !admin.password) {
      toast.error("Please enter complete Details", {
        position: "top-center",
        autoClose: 5000,
      });
    } else if (
      admin.userName !== "fitAdmin" ||
      admin.password !== "admin@cts"
    ) {
      toast.error("Either Username or Password is incorrect", {
        position: "top-center",
        autoClose: 5000,
      });
    } else {
      toast.error("You are not the Admin", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };
  return (
    <div class="container">
      <div class="form-admin">
        <form class="admin-form">
          <div className="text-center">
            <img
              class="admin-form-logo mt-5"
              src="https://cdn-icons-png.flaticon.com/512/2964/2964514.png"
              alt=""
            />
            <h2 class="my-5">FitTracker Admin</h2>
          </div>
          <div class="form-outline mb-4">
          <label class="form-label" for="form2Example1">
              Username
            </label>
            <input
              type="text"
              id="form2Example1"
              class="form-control"
              name="userName"
              value={admin.userName}
              onChange={handleChange}
            />
            
          </div>

          <div class="form-outline mb-4">
          <label class="form-label" for="form2Example2">
              Password
            </label>
            <input
              type="password"
              id="form2Example2"
              class="form-control"
              name="password"
              value={admin.password}
              onChange={handleChange}
            />
            
          </div>

          <div class="text-center">
            <button
              onClick={handleSubmit}
              type="button"
              class="btn btn-primary btn-block mb-4"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
